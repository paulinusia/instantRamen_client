<template>
<div>
   <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                   
                    <div class="card-body">
                        <form @submit="formSubmit">
                        <strong>Product ID</strong>
                        <input type="text" class="form-control" v-model="fk_product">

                        <strong>Purchase Detail:</strong>
                        <textarea class="form-control" v-model="purchasedetail"></textarea>
    
                        <button class="btn btn-success">Submit</button>
                        </form>

                        <strong>Ordering Result:</strong>
                        <pre>
                        {{output}}
                        </pre>
                        <pre>
                          {{product}}
                        </pre>
                    </div>
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
                    purchasedetail: this.purchasedetail,
<<<<<<< HEAD
                    purchasestatus: this.purchasestatus,
=======
                    fk_product: this.fk_product,
                    fk_purchase_payment: this.fk_purchase_payment,
                    fk_purchase_owner: this.fk_purchase_owner,
>>>>>>> 8f8d6f2c92a0cf1552bba1b10ae781f6816c0019
                    fk_address: this.fk_address,
                    fk_purchase_owner: this.fk_purchase_owner,
                    fk_purchase_payment: this.fk_purchase_payment,
                    fk_product: this.fk_product,

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

</style>