<template>
  <v-card height="100%">
    <v-card-title class="purple--text">Monthly Expense Breakdown</v-card-title>
    <apexchart type="pie" :options="options" :series="series" height="300" />
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
