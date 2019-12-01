<template>
    <div>
        <h1> test </h1>
        <order/>
    </div>
</template>

<script>
import OrderStatus from '@/components/OrderStatus.vue'
export default {
    data(){

    },
    components:{
        'order' : OrderStatus
    }
}
</script>


<style scoped>

</style>