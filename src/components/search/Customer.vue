<template>
<div class="purchase">



<v-container>
 <!-- GET METHODS FOR PRODUCT -->
    <v-row 
    justify="space-around"
  class="row">

      <v-card>
          <v-flex>
              <input v-model="customerID" placeholder="enter Customer ID">
          </v-flex>

          <v-flex> 
            <p> Customer info: {{customerID}} </p>  
          </v-flex>
          <v-flex > 
            <v-btn @click="getCustomerByID"> Get Customer By ID </v-btn> 
          </v-flex>
      </v-card>

     


       <v-card >
       <v-flex>
         <v-btn @click="getCustomers"> Get ALL Customers </v-btn>
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
      customerID: null,
      customer: null, 
    };
  },
  methods: {
      getCustomers() {
     axios
      .get('http://localhost:8081/customerservice/customers/')
      .then(response => {this.customer = console.log(response)});
    },
    getCustomerByID(customerID){  
     axios.get('http://localhost:8081/customerservice/customer/'+ this.customerID)
              .then(response => {this.customer = console.log(response.data)});
    //console.log(customerID);
  }
  
},
}

</script>

<style scoped>
.row{
  margin-top: 5%;
  text-align:center;
}
</style>
