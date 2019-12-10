<template>
  <div>
    <h3>Individual Customer Info</h3>
    <p>
      ID: {{customer.id}}
      <br />
      Name: {{customer.firstName}} {{customer.lastName}}
      <br />
      Phone: {{customer.phoneNumber}}
      <br />
      email:{{customer.email}}
    </p>
    <br />
    <strong>Payments:</strong>
    <table id="paymentTable">
      <tr>
        <th>ID</th>
        <th>Type</th>
        <th>Card Number</th>
        <th>Expiration Date</th>
        <th>Security Code</th>
      </tr>
      <tr v-for="payment in payments" :key="payment.id">
        <td>{{payment.id}}</td>
        <td>{{payment.type}}</td>
        <td>{{payment.cardNumber}}</td>
        <td>{{payment.expirationDate}}</td>
        <td>{{payment.securityCode}}</td>
      </tr>
    </table>
    <br />
    <strong>Addresses:</strong>
    <table id="addressTable">
      <tr>
        <th>ID</th>
        <th>Street Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip</th>
      </tr>
      <tr v-for="address in addresses" :key="address.id">
        <td>{{address.id}}</td>
        <td>{{address.streetAddress}}</td>
        <td>{{address.city}}</td>
        <td>{{address.state}}</td>
        <td>{{address.zip}}</td>
      </tr>
    </table>
    <br />
    <div id="updateCustomerForm">
      <strong>Update Customer Info:</strong>
      <v-text-field v-model="updatedFirstName" label="Updated First Name..."></v-text-field>
      <v-text-field v-model="updatedLastName" label="Updated Last Name..."></v-text-field>
      <v-text-field v-model="updatedEmail" label="Updated Email..."></v-text-field>
      <v-text-field v-model="updatedPhoneNumber" label="Updated Phone Number..."></v-text-field>
      <v-btn outlined @click="updateCustomer">Update Customer</v-btn>
    </div>
    <br />
    <div>
      <v-btn class="createButton" @click="createCustomer">Create Customer</v-btn>
    </div>
    <!--
    <br />
    <div>
      <v-btn class="deleteButton" @click="deleteCustomer">Delete Customer</v-btn>
    </div>-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.getCustomerByID();
  },
  data() {
    return {
      customer: undefined,
      updatedFirstName: "",
      updatedLastName: "",
      updatedEmail: "",
      updatedPhoneNumber: "",
      payments: undefined,
      addresses: undefined
    };
  },
  methods: {
    createCustomer() {
      this.$router.push("/");
    },
    getCustomerPayments() {
      console.log("getting customer payments...");
      let currentObj = this;
      let getPaymentsForCustomerLink = "";
      for (var i = 0; i < currentObj.customer.links.length; i++) {
        if (currentObj.customer.links[i].rel === "getPaymentsForCustomer") {
          getPaymentsForCustomerLink = currentObj.customer.links[i].uri;
          break;
        }
      }
      console.log(
        "get paymetns for customer link: " + getPaymentsForCustomerLink
      );
      if (getPaymentsForCustomerLink.length < 1) return null;
      axios
        .get("http://localhost:8081" + getPaymentsForCustomerLink)
        .then(response => {
          console.log("getCustomerPayments Response:");
          console.log(response);
          this.payments = response.data.Payment;
        });
    },
    getCustomerAddresses() {
      console.log("getting customer addresses...");
      let currentObj = this;
      let getAddressesForCustomerLink = "";
      for (var i = 0; i < currentObj.customer.links.length; i++) {
        if (currentObj.customer.links[i].rel === "getAddressesForCustomer") {
          getAddressesForCustomerLink = currentObj.customer.links[i].uri;
          break;
        }
      }
      console.log(
        "get addresses for customer link: " + getAddressesForCustomerLink
      );
      if (getAddressesForCustomerLink.length < 1) return null;
      axios
        .get("http://localhost:8081" + getAddressesForCustomerLink)
        .then(response => {
          console.log("getCustomerAddresses Response:");
          console.log(response);
          this.addresses = response.data.Address;
        });
    },
    getCustomerByID() {
      axios
        .get(
          "http://localhost:8081/customerservice/customer/" + this.customerID
        )
        .then(response => {
          console.log("getCustomerById Response:");
          console.log(response);
          this.customer = response.data.Customer;
          this.getCustomerPayments();
          this.getCustomerAddresses();
        });
    },
    /* deleteCustomer() {
      console.log("Deleting customer...");
      let currentObj = this;
      let deleteCustomerLink = "";
      for (var i = 0; i < currentObj.customer.links.length; i++) {
        if (currentObj.customer.links[i].rel === "deleteCustomer") {
          deleteCustomerLink = currentObj.customer.links[i].uri;
          break;
        }
      }
      console.log("update customer link: " + deleteCustomerLink);
      if (deleteCustomerLink.length < 1) return null;
      axios
        .delete(
          "http://localhost:8081"
        )
        .then(response => {
          console.log("deleteCustomer Response:");
          console.log(response);
          this.$router.push("/customers");
        });
    }, */
    updateCustomer() {
      console.log("Updating customer...");
      let currentObj = this;
      let updateCustomerLink = "";
      for (var i = 0; i < currentObj.customer.links.length; i++) {
        if (currentObj.customer.links[i].rel === "updateCustomer") {
          updateCustomerLink = currentObj.customer.links[i].uri;
          break;
        }
      }
      console.log("update customer link: " + updateCustomerLink);
      if (updateCustomerLink.length < 1) return null;
      axios
        .put("http://localhost:8081" + updateCustomerLink, {
          Customer: {
            id: currentObj.customer.id,
            firstName: currentObj.updatedFirstName,
            lastName: currentObj.updatedLastName,
            email: currentObj.updatedEmail,
            phoneNumber: currentObj.updatedPhoneNumber
          }
        })
        .then(function(response) {
          console.log("currentObj:");
          console.log(currentObj);
          console.log(response);
          currentObj.customer = response.data.Customer;
          console.log(currentObj.customer);
        })
        .catch(function(error) {
          console.log(error);
        });
      currentObj.updatedFirstName = "";
      currentObj.updatedLastName = "";
      currentObj.updatedEmail = "";
      currentObj.updatedPhoneNumber = "";
    }
  },
  props: ["customerID"]
};
</script>

<style scoped>
#updateCustomerForm {
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
}
.createButton {
  background-color: green !important;
  color: white !important;
}
tr {
  display: flex;
  justify-content: space-between;
}
th {
  width: 15vw;
  text-align: left;
}
td {
  width: 15vw;
  text-align: left;
}
#paymentTable {
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
}
#addressTable {
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
}
/*
.deleteButton {
  background-color: red !important;
  color: white !important;
} */
</style>