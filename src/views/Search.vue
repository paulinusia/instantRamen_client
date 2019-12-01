<template>
  <div class="search">
    <h1>Get info page</h1>
    <h3> Search product information </h3>
    <product/>
     <h3> Search purchase information </h3>
     <purchase />
      <h3> Search Customer information </h3>
      <customer />
      <h3> Search Partner information </h3>
      <partner />


  </div>
</template>

<script>
import Product from '@/components/search/Product.vue'
import Purchase from '@/components/search/Purchase.vue'
import Customer from '@/components/search/Customer.vue'
import Partner from '@/components/search/Partner.vue'


export default {
  data(){

  },
  components: {
    Product,
    Purchase,
    Customer,
    Partner
  }
}
</script>


<style scoped>

</style>