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
    <div id="updateCustomerForm">
      <v-text-field v-model="updatedFirstName" label="Updated First Name..."></v-text-field>
      <v-text-field v-model="updatedLastName" label="Updated Last Name..."></v-text-field>
      <v-text-field v-model="updatedEmail" label="Updated Email..."></v-text-field>
      <v-text-field v-model="updatedPhoneNumber" label="Updated Phone Number..."></v-text-field>
      <v-btn outlined @click="updateCustomer">Update Customer</v-btn>
    </div>
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
      updatedPhoneNumber: ""
    };
  },
  methods: {
    getCustomerByID() {
      axios
        .get(
          "http://localhost:8081/customerservice/customer/" + this.customerID
        )
        .then(response => {
          console.log("getCustomerById Response:");
          console.log(response);
          this.customer = response.data.Customer;
        });
    },
    updateCustomer() {
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
</style>