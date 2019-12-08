


<template>
<div class="partner">

<Nav />

<v-container>
 <!-- GET METHODS FOR PRODUCT -->
    <v-row 
    justify="space-around"
  class="row">

      <v-card>
          <v-flex>
              <input v-model="partnerID" placeholder="enter Partner ID">
          </v-flex>

          <v-flex> 
            <p> Partner info: {{partnerID}} </p>  
          </v-flex>
          <v-flex > 
            <v-btn @click="getPartnerByID"> Get Partner By ID </v-btn> 
          </v-flex>
      </v-card>

    

       <v-card >
       <v-flex>
         <v-btn @click="getPartners"> Get ALL Partners </v-btn>
        </v-flex>
        
      </v-card>

    </v-row>

    
  <div>
   
       <strong>All Partners:</strong>
       
          <li v-for="partner in partners" :key="partner.id">
          <br />
          <div v-if="partner">
            Partner
            <br />
            id:{{partner.id}}
            <br />
            Partner Name:{{partner.partnerName}}
            <br />
            Partner Type:{{partner.partnerType}}
            <br />
            Description:{{partner.description}}
            <br />
            Phone Number :{{partner.phoneNumber}}
        
          </div>


  </li>

  </div>
    <h1> Partner By ID: </h1>
      <br />
          <div v-if="partner">
            Partner
            <br />
            id:{{partner.id}}
            <br />
            Partner Name:{{partner.partnerName}}
            <br />
            Partner Type:{{partner.partnerType}}
            <br />
            Description:{{partner.description}}
            <br />
            Phone Number :{{partner.phoneNumber}}
        
          </div>


<!-- POST/PUT/DELETE FOR AXIOS?? -->
<v-form>

</v-form>

</v-container>
    </div>
</template>



<script>

const axios = require('axios');
import Nav from '@/components/search/Nav.vue'
export default {
  data() {
    return {
      isShowing: false,
      partnerID: null,
      partner: '', 
      partners: '',
    };
  },
  components:{
    Nav
  },
  methods: {
    //logs all parn
      getPartners() {
     axios
      .get('http://localhost:8081/partnerservice/partners/')
      .then(response => {this.partners = console.log(response)});
    },
    getPartnerByID(partnerID){  
     axios.get('http://localhost:8081/partnerservice/partner'+ this.partnerID)
              .then(response => {this.partner = console.log(response.data)});
    //console.log(partnerID);
  }
  
},
}

</script>

<style scoped>
.row {
  margin-top: 0%;
  margin-bottom: 5%;
  margin-left: 25%;
  text-align: center;
}
</style>
