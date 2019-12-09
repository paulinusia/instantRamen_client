<template>
<div class="purchase">


<Nav />
<v-container>
 <!-- GET METHODS FOR PRODUCT -->
    <v-row 
    justify="space-around"
  class="row">

      <v-card>
          <v-flex>
              <input v-model="purchaseID" placeholder="enter Purchase ID">
          </v-flex>

          <v-flex> 
            <p> Purchase info: {{purchaseID}} </p>  
          </v-flex>
         
          <v-flex > 
            <v-btn @click="getPurchaseByID"> Get Purchase By ID </v-btn> 
          </v-flex>
          
      </v-card>

      <v-card>
          <v-flex>
            <input v-model="productID" placeholder="enter product ID">
          </v-flex>
          <v-flex>
              <p> Product info: {{productID}} </p>
          <v-flex>
            <v-btn @click="getPurchaseByProductID"> Return purchases by product ID </v-btn>
          </v-flex>
          </v-flex>
      </v-card>

      <v-card>
        <v-flex>
          <input v-model="customerID" placeholder="enter customer ID">
        </v-flex>
        <v-flex>
          <p> customer ID: {{customerID}} </p>
        </v-flex>
        <v-flex>
          <v-btn @click="getPurchaseByCustomerID"> Return purchases by customer ID </v-btn>
        </v-flex>
      </v-card>

   

    </v-row>

   <div class="purchaseByID" v-if="purchase">
     Purchase By ID Information
  <br />id: {{purchase.Purchase.id}}<br />
  <br /> Product id: {{purchase.Purchase.productID}}<br />
  <br />Purchase Detail : {{purchase.Purchase.purchaseDetail}}<br />
  <br />Purchase Status: {{purchase.Purchase.purchaseStatus}}<br />
  <br />Address ID: {{purchase.Purchase.addressID}}<br />
  <br />Purchase Owner: {{purchase.Purchase.purchaseOwner}}<br />
    </div>    




<!-- returns array of 0> -->
{{products}}
<div class="purchaseByProductID" v-if="products">
     Purchase By ID Information
     
  <ul v-for="purchase in purchases" :key="purchase.id">
  <br/> <br/>
  <br />id: {{purchase.id}}<br />
  <br />address id: {{purchase.addressID}}<br />
  <br />product id: {{purchase.productID}}<br />
  <br />Purchase Detail: {{purchase.purchaseDetail}}<br />
  <br />Purchase Status: {{purchase.purchaseStatus}}<br />
  
  </ul>
    </div>    



<div class="purchaseByCustomerID" v-if="purchases">
     Purchase By ID Information
     
  <ul v-for="purchase in purchases" :key="purchase.id">
  <br/> <br/>
  <br />id: {{purchase.id}}<br />
  <br />address id: {{purchase.addressID}}<br />
  <br />product id: {{purchase.productID}}<br />
  <br />Purchase Detail: {{purchase.purchaseDetail}}<br />
  <br />Purchase Status: {{purchase.purchaseStatus}}<br />
  
  </ul>
    </div>    
 
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
      customerID: '',
      purchaseID: '',
      productID: '',
      purchases: null,
      purchase: '',
      products: '',

    };
  },
  components: {
    Nav
  },
  methods: {
    getPurchaseByID(purchaseID){  
     axios.get('http://localhost:8081/purchaseservice/purchase/'+ this.purchaseID)
              .then(response => {this.purchase = response.data});
  },
  getPurchaseByProductID(productID){  
    
     axios({
       method: "get",
       url: 'http://localhost:8081/purchaseservice/productpurchases/'+this.productID
     }).then(response => {this.product = response.data,
              console.log(response.data.Purchase)});
  },
  getPurchaseByCustomerID(customerID){  
     axios.get('http://localhost:8081/purchaseservice/customerpurchases/'+ this.customerID)
              .then(response => {this.purchases = response.data.Purchase

              });
    //console.log(customerID);
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
