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
  output: ''
  };
},
methods:{
  formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                this.axios.post('http://localhost:8081/purchaseservice/purchase', {
                    purchasestatus: this.purchasestatus,
                    purchasedetail: this.purchasedetail,
                    fk_product: this.fk_product,
                    fk_purchase_payment: this.fk_purchase_payment,
                    fk_purchase_owner: this.fk_purchase_owner,
                    fk_address: this.fk_address,
                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }
        

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