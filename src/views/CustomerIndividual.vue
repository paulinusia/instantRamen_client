<template>
  <h3>Individual Customer Info</h3>
</template>

<script>
import axios from "axios";
export default {
  created() {
    console.log("created...");
    console.log("customerID:");
    console.log(this.customerID);
    // axios
    //   .get("http://localhost:8081/customerservice/customer/106")
    //   .then(response => {
    //     console.log("getCustomerById Response:");
    //     console.log(response);
    //     this.customer = response.data.Customer;
    //   });
  },
  data() {
    return {
      customer: undefined
    };
  },
  props: {
    customerID: Number
  }
};
</script>

<style scoped>
</style>