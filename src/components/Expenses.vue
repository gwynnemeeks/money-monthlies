<template>
  <v-card>
    <v-card-title>
      Monthly Expenses
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ["expenses"],
  data() {
    return {
      name: "",
      amount: null,
    };
  },
};
</script>

<style></style>
