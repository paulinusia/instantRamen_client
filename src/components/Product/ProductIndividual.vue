<template>
  <div>
    <h3>Individual Product Info</h3>
    <br />
    ID: {{product.id}}
    <br />
    Name: {{product.productName}}
    <br />
    Cost: {{product.cost}}
    <br />
    Description: {{product.productDescription}}
    <br />
    Owner ID: {{product.partnerId}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    console.log("created...");
    console.log("productID:");
    console.log(this.productID);
    this.getProductByID();
  },
  data() {
    return {
      product: undefined
    };
  },
  methods: {
    getProductByID() {
      axios
        .get(
          "http://localhost:8081/productservice/product/" + this.productID
        )
        .then(response => {
          console.log("getProductById Response:");
          console.log(response);
          this.product = response.data.Product;
        });
    }
  },
  props: ["productID"]
};
</script>

<style scoped>
</style>