<template>
  <v-app>
   
    <!-- nav bar if necessary -->

     

    <v-content>
      
      <product/>

      <v-spacer/>
    </v-content>
  </v-app>
</template>

<script>

import Product from './components/Product.vue';

export default {
  name: 'App',

  components: {
   
    product: Product,
  },

  data: () => ({
    //
  }),
};
</script>
