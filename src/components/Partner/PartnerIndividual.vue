<template>
  <div>
    <h3>Individual Partner Info</h3>
    <br />
    ID: {{partner.id}}
    <br />
    Name: {{partner.partnerName}}
    <br />
    Description: {{partner.description}}
    <br />
    Partner Type: {{partner.partnerType}}
    <br />
    Phone: {{partner.phoneNumber}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    console.log("created...");
    console.log("partnerID:");
    console.log(this.partnerID);
    this.getPartnerByID();
  },
  data() {
    return {
      partner: undefined
    };
  },
  methods: {
    getPartnerByID() {
      axios
        .get(
          "http://localhost:8081/partnerservice/partner/" + this.partnerID
        )
        .then(response => {
          console.log("getPartnerById Response:");
          console.log(response);
          this.partner = response.data.Partner;
        });
    }
  },
  props: ["partnerID"]
};
</script>

<style scoped>
</style>