<template>
  <div>
    <h2>Partner List</h2>
    <br />
    <div class="container">
      <table id="partnerTable">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Partner Type</th>
          <th>Phone Number</th>
        </tr>
        <router-link
          class="routerLink"
          v-for="partner in partners"
          :key="partner.id"
          :to="{ name: 'partner', params: { partnerID: partner.id } }"
        >
          <tr class="partnerRow">
            <td>{{partner.id}}</td>
            <td>{{partner.partnerName}}</td>
            <td>{{partner.description}}</td>
            <td>{{partner.partnerType}}</td>
            <td>{{partner.phoneNumber}}</td>
          </tr>
        </router-link>
      </table>
    </div>
    <!--<v-data-table :headers="headers" :items="partners" :items-per-page="5" class="elevation-1"></v-data-table>
    <router-link :to="{ name: 'partner', params: { partnerID: 107 } }">Individual Partner</router-link> -->
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

<style scoped>
tr {
  display: flex;
  justify-content: space-between;
}
th {
  width: 15vw;
  text-align: left;
}
td {
  width: 15vw;
  text-align: left;
}
.container {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}

#partnerTable {
  width: 95vw;
}
.routerLink {
  color: black;
  text-decoration: none;
}
.partnerRow:hover {
  background-color: #999;
}
</style>