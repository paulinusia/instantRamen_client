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




          <ul v-for="product in products" :key="product.id">
          <br />
          <div v-if="product">
            Product
            <br />
            id:{{product.id}}
            <br />
            Name:{{product.productName}}
            <br />
            Cost :{{product.cost}}
            <br />
            Description:{{product.productDescription}}
            <br />
            Partner ID :{{product.partnerId}}
            
          </div>
            </ul>


         
      <br />
          <div v-if="partnerProducts">
            Products by partner ID
            <br />
            id:{{product.Product.id}}
            <br />
            Name:{{product.Product.productName}}
            <br />
            Cost:{{product.Product.cost}}
            <br />
            Description:{{product.Product.productDescription}}
            <br />
            Partner ID:{{product.Product.partnerId}}
        
          </div>


 
      <br />
          <div v-if="productNames">
             <h1> Product by Name: </h1>
            Product
            <br />
            id:{{productNames.id}}
            <br />
            Name:{{productNames.productName}}
            <br />
            Cost:{{productNames.cost}}
            <br />
            Description:{{productNames.productDescription}}
            <br />
            Partner ID:{{productNames.partnerId}}
        
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
      partnerProducts: '',
      partnerID: null,
      productName: null, 
      productNames: '',
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
      .then(response => {this.products = response.data.Product,
      console.log('getting all products...')});
    },
    getProductByID(productID){  
     axios.get('http://localhost:8081/productservice/product/'+ this.productID)
              .then(response => {this.product = response.data});
    //console.log(productID);
  },

  /*
  getProductByPartnerID(partnerID){  
     axios.get('http://localhost:8081/productservice/partnerproducts/'+ this.partnerID)
              .then(response => {
              console.log(response)});
    //console.log(partnerID);
  }, */

  getProductByName(productName){  
     axios.get('http://localhost:8081/productservice/products/'+ this.productName)
              .then(response => {this.productNames = response.data.Product[0]
              console.log(response.data.Product[0])});
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
