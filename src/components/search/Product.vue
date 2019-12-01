<template>
<div class="product">



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



<!-- POST/PUT/DELETE FOR AXIOS?? -->
<v-form>

</v-form>

</v-container>
    </div>
</template>



<script>

const axios = require('axios');

export default {
  data() {
    return {
      isShowing: false,
      product: null,
      productID: null,
      PartnerProducts: null,
      partnerID: null,
      productName: null,

      
    };
  },
  methods: {
    getProducts() {
     axios
      .get('http://localhost:8081/productservice/products/')
      .then(response => (this.product = response));
    },
    getProductByID(productID){  
     axios.get('http://localhost:8081/productservice/product/'+ this.productID)
              .then(response => (this.product = response.data));
    console.log(productID);
  },
  getProductByPartnerID(partnerID){  
     axios.get('http://localhost:8081/productservice/partnerproducts/'+ this.partnerID)
              .then(response => (this.partnerProducts = response.data));
    console.log(partnerID);
  },
  getProductByName(productName){  
     axios.get('http://localhost:8081/productservice/products/'+ this.productName)
              .then(response => (this.productName = response.data));
    console.log(ProductName);


},





},
}

</script>

<style scoped>
.row{
  margin-top: 5%;
  text-align:left;
}
</style>
