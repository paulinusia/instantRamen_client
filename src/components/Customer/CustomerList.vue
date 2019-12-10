<template>
  <div>
    <h2>Customer List</h2>
    <br />
    <v-data-table :headers="headers" :items="customers" :items-per-page="5" class="elevation-1"></v-data-table>
    <v-btn link :to="{ name: 'customer', params: { customerID: 106 }}">Individual Customer</v-btn>
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
</style>