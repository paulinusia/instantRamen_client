<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <v-form class="form" @submit="formSubmit">
          <strong>Product ID</strong>

          <v-text-field v-model="fk_product" label="ID of product you want to buy" required></v-text-field>

          <strong>Purchase Detail:</strong>
          <v-text-field v-model="purchasedetail" label="Purchase Details" required></v-text-field>

          <v-btn x-large color="success" type="submit" dark>Submit</v-btn>
        </v-form>
        <div class="results">
          <strong>Ordering Result:</strong>
          <br />
          <div v-if="output">
            Purchase:
            <br />
            id:{{output.id}}
            <br />
            productID:{{output.productID}}
            <br />
            purchaseDetail:{{output.purchaseDetail}}
            <br />
            purchaseStatus:{{output.purchaseStatus}}
            <br />
            addressID:{{output.addressID}}
            <br />
            purchaseOwner:{{output.purchaseOwner}}
            <br />
            <v-text-field v-model="updatedDetail" label="Updated purchase detail..."></v-text-field>
            <button v-if="updatedDetail" @click="updatePurchaseDetail">Update Purchase Detail</button>
            <br />
            <v-text-field v-model="updatedStatus" label="Updated purchase status..."></v-text-field>
            <button v-if="updatedStatus" @click="updatePurchaseStatus">Update Purchase Status</button>
          </div>
          <br />
          <strong>Product Info:</strong>
          <br />
          <div>{{product}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      fk_purchase_payment: 109,
      fk_purchase_owner: 104,
      fk_address: 101,
      purchasestatus: "Ordered",
      purchasedetail: "",
      fk_product: "",
      output: "",
      product: "",
      updatedStatus: undefined,
      updatedDetail: undefined
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      let currentObj = this;
      axios
        .post("http://localhost:8081/purchaseservice/purchase", {
          Purchase: {
            purchaseDetail: this.purchasedetail,
            purchaseStatus: this.purchasestatus,
            productID: this.fk_product,
            purchasePaymentID: this.fk_purchase_payment,
            purchaseOwner: this.fk_purchase_owner,
            addressID: this.fk_address
          }
        })
        .then(function(response) {
          console.log(response);
          currentObj.output = response.data.Purchase;
          console.log(currentObj.output);
        })
        .catch(function(error) {
          currentObj.output = error;
        });
    },
    updatePurchaseDetail() {
      let currentObj = this;
      let updatePurchaseDetailLink = "";
      for (var i = 0; i < currentObj.output.links.length; i++) {
        if (currentObj.output.links[i].rel === "updatePurchaseDetail") {
          updatePurchaseDetailLink = currentObj.output.links[i].uri;
          break;
        }
      }
      console.log("update detail link: " + updatePurchaseDetailLink);
      if (updatePurchaseDetailLink.length < 1) return null;
      axios
        .put(
          "http://localhost:8081/" +
            updatePurchaseDetailLink +
            currentObj.updatedDetail
        )
        .then(function(response) {
          console.log(response);
          currentObj.output.purchaseDetail =
            response.data.Purchase.purchaseDetail;
          console.log(currentObj.output);
        })
        .catch(function(error) {
          currentObj.output = error;
        });
      currentObj.updatedDetail = undefined;
    },
    updatePurchaseStatus() {
      let currentObj = this;
      let updatePurchaseStatusLink = "";
      for (var i = 0; i < currentObj.output.links.length; i++) {
        if (currentObj.output.links[i].rel === "updatePurchaseStatus") {
          updatePurchaseStatusLink = currentObj.output.links[i].uri;
          break;
        }
      }
      console.log("update status link: " + updatePurchaseStatusLink);
      if (updatePurchaseStatusLink.length < 1) return null;
      axios
        .put(
          "http://localhost:8081/" +
            updatePurchaseStatusLink +
            currentObj.updatedStatus
        )
        .then(function(response) {
          console.log(response);
          currentObj.output.purchaseStatus =
            response.data.Purchase.purchaseStatus;
          console.log(currentObj.output);
        })
        .catch(function(error) {
          currentObj.output = error;
        });
      currentObj.updatedStatus = undefined;
    }
  },
  mounted() {
    // console.log("loaded");
  },
  created() {
    // axios
    //   .get("http://localhost:8081/productservice/products/")
    //   .then(response => {
    //     this.product = console.log(response);
    //   });
  }
};
</script>


<style scoped>
.form {
  margin: 0 auto;
  width: 800px;
  border-style: dotted;
  border-width: 1px;
  padding: 5%;
  position: abosolute;
  margin-left: 35%;
}

.results {
  margin-top: 10%;
}
</style>