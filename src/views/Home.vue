<template>
  <div class="home">
    <img src="https://instantpotchef.ca/wp-content/uploads/2018/01/Instant-Pot-Chef-Logo_Main.jpg" height="30%" width="30%">
    <!--<h1> Create customer ??????? is that needed here </h1>-->
    <p> </p>
    <h1>Signup</h1>
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

    <input v-model="message" placeholder="First Name">
    <p> </p>
    <input v-model="message" placeholder="Last Name">
    <p> </p>
    <input v-model="message" placeholder="Email Address">
    <p> </p>
    <!--<p>Message is: {{ message }}</p>-->
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {

  },
  data() {
    return {
      firstName: null,
      lastName: null,
      phoneNumber: null,
    };
  },
}
</script>
<style lang="scss">
</style>
