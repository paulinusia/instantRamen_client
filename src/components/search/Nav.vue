<template>
     <div id="nav">
      
       <router-link to="/search/customer" exact>Customer Information</router-link> |
        <router-link to="/search/product" exact>Products</router-link> |
         <router-link to="/search/purchase" exact>See past Purchases</router-link> |
          <router-link to="/search/partner" exact>See partner information</router-link> 
       
       
       
          <router-view></router-view>
    </div>
    
</template>

<script>

export default {
    
}
</script>

<style scoped>

</style>