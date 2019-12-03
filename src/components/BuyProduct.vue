<template>
<div>
   <div class="row justify-content-center">
            <div class="col-md-8">
              
                   
                        <v-form  class="form" @submit="formSubmit">
                       
                        <strong >Product ID</strong>
                      

                         <v-text-field
                        v-model="fk_product"
                        label="ID of product you want to buy" required ></v-text-field>
                    
                        <strong >Purchase Detail: </strong>
                        <v-text-field
                        v-model="purchasedetail"
                        label="Purchase Details" required ></v-text-field>

                        <v-btn x-large color="success" type="submit" dark>Submit</v-btn>
                       
                        </v-form>
                        <div class = "results">
                        <strong>Ordering Result:</strong>
                        <pre>
                        {{output}}
                        </pre>
                        <strong> Product Info: </strong>
                        <p>
                          {{product}}
                        </p>
                        </div>
                    </div>
              
        
        </div>
    </div>


</template>

<script>
import axios from 'axios'
export default {
data(){
  return{
  fk_purchase_payment: 109,
  fk_purchase_owner:104,
  fk_address:101,
  purchasestatus: 'Ordered',
  purchasedetail: '',
  fk_product: '',
  output: '',
  product: ''
  };
},
methods:{
  formSubmit(e) {
                window.alert('test');
                e.preventDefault();
                let currentObj = this;
                axios.post('http://localhost:8081/purchaseservice/purchase', {
                    Purchase:{
                        purchaseDetail: this.purchasedetail,
                        purchaseStatus: this.purchasestatus,
                        productID: this.fk_product,
                        purchasePaymentID: this.fk_purchase_payment,
                        purchaseOwner: this.fk_purchase_owner,
                        addressID: this.fk_address
                    }
                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }
        

},
 mounted() {
            console.log('loaded')
        },
created(){
     
     axios
      .get('http://localhost:8081/productservice/products/')
      .then(response => {this.product = console.log(response)});
    
},

  
}
</script>


<style scoped>

.form {
  
  margin:0 auto; 
  width:800px;
  border-style: dotted;
  border-width: 1px;
  padding: 5%;
  position: abosolute;
  margin-left: 35%;
}


.results{
  margin-top: 10%;
}
</style>