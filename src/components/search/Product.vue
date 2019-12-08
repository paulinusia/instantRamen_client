<template>
<div class="product">


<Nav />
<v-container>
 <!-- GET METHODS FOR PRODUCT -->
    <v-row 
    justify="space-around"
  class="row">

      <v-card>
          <v-flex>
              <input v-model="productID" placeholder="enter Product ID">
          </v-flex>

          <v-flex> 
            <p> Product info: {{productID}} </p>  
          </v-flex>
          <v-flex > 
            <v-btn @click="getProductByID"> Get Product By ID </v-btn> 
          </v-flex>
      </v-card>

      <v-card>
          <v-flex>
            <input v-model="partnerID" placeholder="enter partner ID">
          </v-flex>
          <v-flex>
              <p> partner info: {{partnerID}} </p>
          <v-flex>
            <v-btn @click="getProductByPartnerID"> Return products by partner ID </v-btn>
          </v-flex>
          </v-flex>
      </v-card>

      <v-card>
        <v-flex>
          <input v-model="productName" placeholder="enter name of product">
        </v-flex>
        <v-flex>
          <p> product name: {{productName}} </p>
          <pre>
            {{product}}
          </pre>
        </v-flex>
        <v-flex>
          <v-btn @click="getProductByName"> Return products by Name </v-btn>
        </v-flex>
      </v-card>

      <v-card >
       <v-flex>
         <v-btn @click="getProducts"> Get ALL Products </v-btn>
        </v-flex>
        
      </v-card>

    </v-row>

     <strong>All Products:</strong>
       
          <li v-for="product in products" :key="product.id">
          <br />
          <div v-if="product">
            Product
            <br />
            id:{{product.id}}
            <br />
            Name:{{product.productName}}
            <br />
            Cost :{{product.productCost}}
            <br />
            Description:{{product.productDescription}}
            <br />
            Partner ID :{{product.partnerID}}
            
          </div>
            </li>

            
           <h1> Partner By ID: </h1>
      <br />
          <div v-if="product">
            Product
            <br />
            id:{{product.id}}
            <br />
            Name:{{product.productName}}
            <br />
            Cost:{{product.productCost}}
            <br />
            Description:{{product.productDescription}}
            <br />
            Partner ID:{{product.partnerID}}
        
          </div>




<!-- POST/PUT/DELETE FOR AXIOS?? -->
<v-form>

</v-form>

</v-container>
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
      PartnerProducts: null,
      partnerID: null,
      productName: null, 
      products: ''
      
    };
  },
  components:{
    Nav
  },
  methods: {
    getProducts() {
     axios
      .get('http://localhost:8081/productservice/products/')
      .then(response => {this.products = console.log(response)});
    },
    getProductByID(productID){  
     axios.get('http://localhost:8081/productservice/product/'+ this.productID)
              .then(response => {this.product = console.log(response.data)});
    //console.log(productID);
  },
  getProductByPartnerID(partnerID){  
     axios.get('http://localhost:8081/productservice/partnerproducts/'+ this.partnerID)
              .then(response => {this.partnerProducts = console.log(response.data)});
    //console.log(partnerID);
  },
  getProductByName(productName){  
     axios.get('http://localhost:8081/productservice/products/'+ this.productName)
              .then(response => {this.productName = console.log(response.data)});
    //console.log(ProductName);


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
</style>
