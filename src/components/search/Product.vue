<template>
<div class="product">

      <v-card>
        <v-flex>
          <input v-model="productName" placeholder="enter name of product">
        </v-flex>
        <v-flex>
          <p> product name: {{productName}} </p>
       
        </v-flex>
        <v-flex>
          <v-btn @click="getProductByName"> Return Products by Name </v-btn>
        </v-flex>
      </v-card>
    <br />
<!--<div class="getproductsbypartner" v-if="partnerProducts">
<strong>All Customers:</strong>  
  <ul v-for="product in partnerProducts" :key="product.id">
    <br/> <br/>
    <br />ID: {{product.id}}<br />
    <br />Name: {{product.productName}} <br />
    <br /> Cost :{{product.cost}} <br />
    <br />Description:{{product.productDescription}} <br />
    <br /> Partner ID :{{product.partnerId}} <br />
  </ul>
</div> --> 
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
    </div>
</template>

<script>
const axios = require('axios');
import Nav from '@/components/search/Nav.vue'
export default {
  data() {
    return {
      isShowing: false,
      product: '',
      productID: null,
      partnerProducts: '',
      partnerID: '',
      productName: null, 
      productNames: '',
      products: ''
      
    };
  },
  components:{
    // Nav
  },
  methods: {
    getProducts() {
     axios
      .get('http://localhost:8081/productservice/products/')
      .then(response => {this.products = response.data.Product});
    },
    getProductByID(productID){  
     axios.get('http://localhost:8081/productservice/product/'+ this.productID)
              .then(response => {this.product = response.data
              console.log(response)});
    },
    getProductByPartnerID(partnerID){  
     axios.get('http://localhost:8081/productservice/partnerproducts/'+ this.partnerID)
              .then(response => {this.partnerProducts = response.data.Product})
    }, 
    getProductByName(productName){  
     axios.get('http://localhost:8081/productservice/products/'+ this.productName)
              .then(response => {
                this.products = response.data.Product;
                console.log(response.data.Product);
              });
    },
  },
}

</script>

<style scoped>
.row{
  margin-top: 0%;
  margin-bottom: 5%;
  margin-left: 5%;
  text-align: center;
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