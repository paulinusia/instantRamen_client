<template>
  <div>
    <h2>Partner List</h2>
    <br />
    <v-data-table :headers="headers" :items="partners" :items-per-page="5" class="elevation-1"></v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("http://localhost:8081/partnerservice/partners/")
      .then(response => {
        console.log("getAllPartners Response:");
        console.log(response);
        this.partners = response.data.Partner;
        console.log(this.partners);
      });
  },
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Description", value: "description" },
        { text: "Name", value: "partnerName" },
        { text: "Partner Type", value: "partnerType" },
        { text: "Phone", value: "phoneNumber" }
      ],
      partners: undefined
    };
  }
};
</script>