<template>
  <v-card height="100%">
    <v-card-title class="purple--text">{{ title }}</v-card-title>
    <v-card-text>
      <h1 class="net-amount pb-5" :class="dollarClass">{{ displayAmount }}</h1>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["title", "netAmount"],
  computed: {
    displayAmount() {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(this.netAmount);
    },
  },
};
</script>

<style></style>
