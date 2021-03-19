<template>
  <v-card>
    <v-card-title>Annual Income</v-card-title>
    <v-form>
      <v-text-field v-model="inputVal" type="number" prefix="$" />
    </v-form>
  </v-card>
</template>

<script>
export default {
  props: ["annualAmount"],
  data() {
    return {
      inputVal: +this.annualAmount,
    };
  },
};
</script>

<style></style>
