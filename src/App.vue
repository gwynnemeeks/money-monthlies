<template>
  <v-app>
    <v-app-bar app color="purple darken-2" dark>
      <h1>Monthly Monies</h1>
      <v-spacer></v-spacer>
      <router-link to="/create">
        <v-btn text> Create </v-btn>
      </router-link>
      ||
      <router-link to="/compare">
        <v-btn text> Comparator </v-btn>
      </router-link>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
}
h1 {
  color: rgb(255, 200, 100);
}
.router-link-active .v-btn {
  color: rgb(255, 200, 100);
}
</style>
