<template>
<div class="purchase">



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
      purchaseID: null,
      customerID: null,
      productID: null,
      purchases: null,

      
    };
  },
  methods: {
    getPurchaseByID(purchaseID){  
     axios.get('http://localhost:8081/purchaseservice/purchase/'+ this.purchaseID)
              .then(response => {this.purchase = console.log(response.data)});
    //console.log(purchaseID);
  },
  getPurchaseByProductID(productID){  
     axios.get('http://localhost:8081/purchaseservice/productpurchases/'+ this.productID)
              .then(response => {this.purchases = console.log(response.data)});
    //console.log(partnerID);
  },
  getPurchaseByCustomerID(customerID){  
     axios.get('http://localhost:8081/purchaseservice/customerpurchases/'+ this.customerID)
              .then(response => {this.purchases = console.log(response.data)});
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
