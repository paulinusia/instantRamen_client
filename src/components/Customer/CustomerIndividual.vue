<template>
  <div>
    <h3>Individual Customer Info</h3>
    <br />
    ID: {{customer.id}}
    <br />
    Name: {{customer.firstName}} {{customer.lastName}}
    <br />
    Phone: {{customer.phoneNumber}}
    <br />
    email:{{customer.email}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    console.log("created...");
    console.log("customerID:");
    console.log(this.customerID);
    this.getCustomerByID();
  },
  data() {
    return {
      customer: undefined
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
    }
  },
  props: ["customerID"]
};
</script>

<style scoped>
</style>