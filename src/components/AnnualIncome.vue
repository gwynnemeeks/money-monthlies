<template>
  <v-card>
    <v-card-title>Annual Income</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          @blur="handleChange"
          v-model="inputVal"
          type="number"
          outlined
          color="purple"
          filled
          prefix="$"
        />
      </v-form>
    </v-card-text>
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
  methods: {
    handleChange() {
      this.$emit("income-change", +this.inputVal);
    },
  },
};
</script>

<style></style>
