<template>
  <v-app>
    <div id="app">
      <h1>Money Monthlies</h1>
      <annual-income :annualAmount="annualIncome" />
    </div>
  </v-app>
</template>

<script>
import AnnualIncome from "./components/AnnualIncome";

export default {
  name: "App",

  components: { AnnualIncome },

  data() {
    return {
      annualIncome: 0,
      monthlyExpense: [],
    };
  },
};
</script>

<style></style>
