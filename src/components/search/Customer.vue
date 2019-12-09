<template>
<div class="customer">


<Nav />
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
  
           <h1> Customer By ID: </h1>
      <br />
          <div v-if="Customer">
            Customer
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
  <input v-model="message" placeholder="FirstName">
</v-form>

</v-container>
    </div>
</template>



<script>
import Nav from '@/components/search/Nav.vue'
const axios = require('axios');

export default {
  data() {
    return {
      isShowing: false,
      customerID: null,
      customer: '', 
      customers: ''
    };
  },
   components: {
    Nav
  },
  methods: {
      getCustomers() {
     axios
      .get('http://localhost:8081/customerservice/customers/')
      .then(response => {this.customer = console.log(response)});
    },
    getCustomerByID(customerID){  
     axios.get('http://localhost:8081/customerservice/customer/'+ this.customerID)
              .then(response => {this.customers = console.log(response.data)});
    //console.log(customerID);
    },
    createCustomer() {
      axios
      .post('http://localhost:8081/customerservice/customer/', {
        //{
          //firstname = this.firstname;
          //lastname = this.lastname;
          //email = this.email;
          //phonenumber = this.phonenumber;
        //},
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {this.customer = console.log(response.data)});
    }
  },
 
}

</script>

<style scoped>
.row{
  margin-top: 0%;
  margin-bottom: 5%;
  margin-left: 25%;
  text-align:center;
}
</style>
