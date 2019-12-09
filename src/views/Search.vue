<template>
  <div class="search">
      <Nav/>
    
   <h1> Select the items you would link to search above </h1>


  </div>
</template>

<script>
import Product from '@/components/search/Product.vue'
import Purchase from '@/components/search/Purchase.vue'
import Customer from '@/components/search/Customer.vue'
import Partner from '@/components/search/Partner.vue'
import Nav from '@/components/search/Nav.vue'


export default {
  data(){

  },
  components: {
    Product,
    Purchase,
    Customer,
    Partner,
    Nav
  }
}
</script>


<style scoped>

</style>