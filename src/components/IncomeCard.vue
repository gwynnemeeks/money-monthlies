<template>
  <h3>Income Card</h3>
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
