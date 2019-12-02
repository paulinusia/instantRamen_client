


<template>
<div class="purchase">



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



<!-- POST/PUT/DELETE FOR AXIOS?? -->
<v-form>

</v-form>

</v-container>
    </div>
</template>



<script>

const axios = require('axios');

export default {
  data() {
    return {
      isShowing: false,
      partnerID: null,
      partner: null, 
    };
  },
  methods: {
      getPartners() {
     axios
      .get('http://localhost:8081/partnerservice/partners/')
      .then(response => {this.partner = console.log(response)});
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
