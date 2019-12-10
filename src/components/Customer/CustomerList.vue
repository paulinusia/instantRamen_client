<template>
  <div>
    <h2>Customer List</h2>
    <br />
    <div class="container">
      <table id="customerTable">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
        <router-link
          class="routerLink"
          v-for="customer in customers"
          :key="customer.id"
          :to="{ name: 'customer', params: { customerID: customer.id } }"
        >
          <tr class="customerRow">
            <td>{{customer.id}}</td>
            <td>{{customer.firstName}}</td>
            <td>{{customer.lastName}}</td>
            <td>{{customer.email}}</td>
            <td>{{customer.phoneNumber}}</td>
          </tr>
        </router-link>
      </table>
    </div>
    <!-- <v-btn link :to="{ name: 'customer', params: [106]}">Individual Customer</v-btn> -->
    <!-- <router-link :to="{ name: 'customer', params: { customerID: 106 } }">Individual Customer</router-link> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("http://localhost:8081/customerservice/customers/")
      .then(response => {
        console.log("getAllCustomers Response:");
        console.log(response);
        this.customers = response.data.Customer;
        console.log(this.customers);
      });
  },
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "First Name", value: "firstName" },
        { text: "Last Name", value: "lastName" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phoneNumber" }
      ],
      customers: undefined
    };
  }
};
</script>

<style scoped>
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
.container {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}

#customerTable {
  width: 95vw;
}
.routerLink {
  color: black;
  text-decoration: none;
}
.customerRow:hover {
  background-color: #999;
}
</style>