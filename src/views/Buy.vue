<template>
  <div>
    <h3>Order Product</h3>
    <Buy :key="productID" :productID="productID" />
  </div>
</template>


<script>
import Buy from "../components/BuyProduct";
export default {
  components: {
    Buy: () => import("../components/BuyProduct")
  },
  props: ["productID"]
};
</script>

<style scoped>
</style>