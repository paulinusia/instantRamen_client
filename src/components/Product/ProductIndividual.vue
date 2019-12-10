<template>
  <div>
    <h3>Individual Product Info</h3>
    <br />
    <p>
      ID: {{product.id}}
      <br />
      Name: {{product.productName}}
      <br />
      Cost: {{product.cost}}
      <br />
      Description: {{product.productDescription}}
      <br />
      Owner ID: {{product.partnerId}}
    </p>
    <br />
    <strong>Reviews:</strong>
    <table id="reviewTable">
      <tr>
        <th>ID</th>
        <th>Rating</th>
        <th>Timestamp</th>
        <th>Body</th>
        <th>Customer ID</th>
      </tr>
      <tr v-for="review in reviews" :key="review.id">
        <td>{{review.id}}</td>
        <td>{{review.rating}}</td>
        <td>{{review.timestamp}}</td>
        <td>{{review.body}}</td>
        <td>{{review.customerID}}</td>
      </tr>
    </table>
    <br />
    <br />
    <router-link
      class="routerLink"
      :to="{ name: 'buy', params: { productID: product.id } }"
    >Buy Product</router-link>
    <br />
    <br />
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
      product: undefined,
      reviews: undefined
    };
  },
  methods: {
    buyProduct() {
      console.log("buying product...");
    },
    getProductByID() {
      axios
        .get("http://localhost:8081/productservice/product/" + this.productID)
        .then(response => {
          console.log("getProductById Response:");
          console.log(response);
          this.product = response.data.Product;
          this.getProductReviews();
        });
    },
    getProductReviews() {
      console.log("getting product reviews...");
      let currentObj = this;
      let getReviewsForProductLink = "";
      for (var i = 0; i < currentObj.product.links.length; i++) {
        if (currentObj.product.links[i].rel === "getReviewsForProduct") {
          getReviewsForProductLink = currentObj.product.links[i].uri;
          break;
        }
      }
      console.log("get reviews for product link: " + getReviewsForProductLink);
      if (getReviewsForProductLink.length < 1) return null;
      axios
        .get("http://localhost:8081" + getReviewsForProductLink)
        .then(response => {
          console.log("getProductReviews Response:");
          console.log(response);
          this.reviews = response.data.Review;
        });
    }
  },
  props: ["productID"]
};
</script>

<style scoped>
#reviewTable {
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
}
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
</style>