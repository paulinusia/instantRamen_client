<template>
<div class="product">


<Nav />
<v-container>
    <v-row 
    justify="space-around"
  class="row">
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
    </v-row>
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
 
      <br />
          <div v-if="productNames">
             <h1> Product by Name: </h1>
            Product ID: {{productNames.id}}
            <br />
            Name: {{productNames.productName}}
            <br />
            Cost: {{productNames.cost}}
            <br />
            Description: {{productNames.productDescription}}
            <br />
            Partner ID: {{productNames.partnerId}}
        
          </div>
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
      partnerID: '',
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
              .then(response => {this.productNames = response.data.Product[0]
              console.log(response.data.Product[0])});
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
