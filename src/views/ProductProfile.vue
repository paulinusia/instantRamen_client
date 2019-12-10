<template>
  <div>
    <ProductIndividual :key="productID" :productID="productID" />
  </div>
</template>

<script>
import ProductIndividual from "../components/Product/ProductIndividual";
export default {
  components: {
    ProductIndividual: () =>
      import("../components/Product/ProductIndividual")
  },
  props: ["productID"]
};
</script>

<style scoped>
</style>