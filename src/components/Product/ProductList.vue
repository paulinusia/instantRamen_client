<template>
  <div>
    <h2>Product List</h2>
    <br />
    <div class="container">
      <table id="productTable">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Cost</th>
          <th>Description</th>
          <th>Owner ID</th>
        </tr>
        <router-link
          class="routerLink"
          v-for="product in products"
          :key="product.id"
          :to="{ name: 'product', params: { productID: product.id } }"
        >
          <tr class="productRow">
            <td>{{product.id}}</td>
            <td>{{product.productName}}</td>
            <td>{{product.cost}}</td>
            <td>{{product.productDescription}}</td>
            <td>{{product.partnerId}}</td>
          </tr>
        </router-link>
      </table>
    </div>
    <!-- <v-data-table :headers="headers" :items="products" :items-per-page="5" class="elevation-1"></v-data-table>
    <router-link :to="{ name: 'product', params: { productID: 115 } }">Individual Product</router-link> -->
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
        { text: "Name", value: "productName" },
        { text: "Cost", value: "cost" },
        { text: "Description", value: "productDescription" },
        { text: "Owner ID", value: "partnerId" }
      ],
      products: undefined
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

#productTable {
  width: 95vw;
}
.routerLink {
  color: black;
  text-decoration: none;
}
.productRow:hover {
  background-color: #999;
}
</style>