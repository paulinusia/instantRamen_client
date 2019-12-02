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
  <input v-model="message" placeholder="FirstName">
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
    },
    createCustomer() {
      axios
      .post('http://localhost:8081/customerservice/customer/', {
        {
          firstname = this.firstname;
          lastname = this.lastname;
          email = this.email;
          phonenumber = this.phonenumber;
        }
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
