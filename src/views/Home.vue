<template>
<div class="col-md-8">
  <div class="home">
    <img src="https://instantpotchef.ca/wp-content/uploads/2018/01/Instant-Pot-Chef-Logo_Main.jpg" height="30%" width="30%">
    <!--<h1> Create customer ??????? is that needed here </h1>-->
    <p> </p>
    <customer/> 
    <!--<hr>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" class="form-control" v-model="userData.firstName">
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" class="form-control" v-model="userData.lastName">
    </div>
    <div class="form-group">
      <label for="email">Mail</label>
      <input type="text" id="email" class="form-control" v-model="userData.email">
    </div>
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <button class="btn btn-primary" @click.prevent="submitted">Submit!</button>
    </div>-->
 <v-form class="form" @submit="formSubmit">
                       <h1>Signup</h1>
                        <strong>New Customer</strong>
                      

                         <v-text-field
                        v-model="firstName"
                        label="first name" required ></v-text-field>
                        <v-text-field
                        v-model="lastName"
                        label="last name" required ></v-text-field>
                         <v-text-field
                        v-model="email"
                        label="email" required ></v-text-field>
                        <v-text-field
                        v-model="phoneNumber"
                        label="phone number" required ></v-text-field>
                    
                        <v-btn x-large color="success" type="submit" dark>Submit</v-btn>
                       
                        </v-form>
                        <div class = "results">
                        <strong>New Customer Result:</strong>
                        <pre>
                        {{output}}
                        </pre>
    <!--<p>Message is: {{ message }}</p>-->
  </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Customer from '@/components/search/Customer.vue'

export default {
  name: 'home',
  components: {
    //'customer': Customer,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      output: ''
    };
  },
  methods:{
    formSubmit(e) {
                window.alert('test');
                e.preventDefault();
                let currentObj = this;
                axios.post('http://localhost:8081/customerservice/customer', {
                    Customer:{
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        phoneNumber: this.phoneNumber,
                        
                    }
                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }
        
  }
}
</script>
<style lang="scss">
</style>
<style scoped>
.form {
  margin: 0 auto;
  width: 100%;
  border-style: dotted;
  border-width: 1px;
  padding: 5%;
  margin-right: 5%;
  /*position: absolute;*/
  /*margin-left: 35%;*/
}
</style>
