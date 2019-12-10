<template>
  <div>
    <CustomerIndividual :key="customerID" :customerID="customerID" />
  </div>
</template>

<script>
import CustomerIndividual from "../components/Customer/CustomerIndividual";
export default {
  components: {
    CustomerIndividual: () =>
      import("../components/Customer/CustomerIndividual")
  },
  props: ["customerID"]
};
</script>

<style scoped>
</style>