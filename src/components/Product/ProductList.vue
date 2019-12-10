<template>
  <div>
    <h2>Product List</h2>
    <br />
    <v-data-table :headers="headers" :items="products" :items-per-page="5" class="elevation-1"></v-data-table>
    <router-link :to="{ name: 'product', params: { productID: 115 } }">Individual Product</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("http://localhost:8081/productservice/products/")
      .then(response => {
        console.log("getAllProducts Response:");
        console.log(response);
        this.products = response.data.Product;
        console.log(this.products);
      });
  },
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Cost", value: "cost" },
        { text: "Name", value: "productName" },
        { text: "Description", value: "productDescription" },
        { text: "Owner ID", value: "partnerId" }
      ],
      products: undefined
    };
  }
};
</script>

<style scoped>
</style>