<template>
  <div>
    <PartnerIndividual :key="partnerID" :partnerID="partnerID" />
  </div>
</template>

<script>
import PartnerIndividual from "../components/Partner/PartnerIndividual";
export default {
  components: {
    PartnerIndividual: () =>
      import("../components/Partner/PartnerIndividual")
  },
  props: ["partnerID"]
};
</script>

<style scoped>
</style>