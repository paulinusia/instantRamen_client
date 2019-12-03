<template>
  <div class="search">
    <v-card>
    <v-card-title> Search Product Information </v-card-title>
      <product/>
    </v-card>
    <v-card>
     <v-card-title> Search purchase information </v-card-title>
     <purchase />
     </v-card>
     <v-card>
      <v-card-title> Search Customer information </v-card-title>
      <customer />
      </v-card>
      <v-card>
      <v-card-title> Search Partner information </v-card-title>
      <partner />
      </v-card>


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