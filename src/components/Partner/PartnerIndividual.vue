<template>
  <div>
    <h3>Individual Partner Info</h3>
    <p>
      ID: {{partner.id}}
      <br />
      Name: {{partner.partnerName}}
      <br />
      Description: {{partner.description}}
      <br />
      Partner Type: {{partner.partnerType}}
      <br />
      Phone: {{partner.phoneNumber}}
    </p>
    <div id="updatePartnerForm">
      <v-text-field v-model="updatedPartnerName" label="Updated Partner Name..."></v-text-field>
      <v-text-field v-model="updatedDescription" label="Updated Description..."></v-text-field>
      <v-text-field v-model="updatedPartnerType" label="Updated Partner Type..."></v-text-field>
      <v-text-field v-model="updatedPhoneNumber" label="Updated Phone Number..."></v-text-field>
      <v-btn outlined @click="updatePartner">Update Partner</v-btn>
    </div>
    <br />
    <div>
      <v-btn class="createButton" @click="createPartner">Create Partner</v-btn>
    </div>
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
    createPartner() {
      this.$router.push("/");
    },
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
    },
        updatePartner() {
      console.log("Updating partner...");
      let currentObj = this;
      let updatePartnerLink = "";
      for (var i = 0; i < currentObj.partner.links.length; i++) {
        if (currentObj.partner.links[i].rel === "updatePartner") {
          updatePartnerLink = currentObj.partner.links[i].uri;
          break;
        }
      }
      console.log("update partner link: " + updatePartnerLink);
      if (updatePartnerLink.length < 1) return null;
      axios
        .put("http://localhost:8081" + updatePartnerLink, {
          Partner: {
            id: currentObj.partner.id,
            partnerName: currentObj.updatedPartnerName,
            description: currentObj.updatedDescription,
            partnerType: currentObj.updatedPartnerType,
            phoneNumber: currentObj.updatedPhoneNumber
          }
        })
        .then(function(response) {
          console.log("currentObj:");
          console.log(currentObj);
          console.log(response);
          currentObj.partner = response.data.Partner;
          console.log(currentObj.partner);
        })
        .catch(function(error) {
          console.log(error);
        });
      currentObj.updatedPartnerName = "";
      currentObj.updatedDescription = "";
      currentObj.updatedPartnerType = "";
      currentObj.updatedPhoneNumber = "";
    }
  },
  props: ["partnerID"]
};
</script>

<style scoped>
#updatePartnerForm {
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
}
.createButton {
  background-color: green !important;
  color: white !important;
}
</style>