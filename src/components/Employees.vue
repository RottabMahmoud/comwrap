<template>
  <v-container fluid>
    <!-- <v-row>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel></v-row
    > -->
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          v-model="select"
          @change="filterByAge()"
          :items="items"
          label="Standard"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-hover
        v-for="emp in allEmployees"
        :key="emp.id"
        v-slot="{ hover }"
        open-delay="200"
      >
        <v-card
          class="
            pa-xs-4
            ma-10
            d-xl-flex
            align-content-space-around
            flex-wrap
            rounded-lg
          "
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <!-- <v-img height="250" :src="emp.profile_image"></v-img> -->
            <v-list-item-content>
              <div class="text-overline mb-4">
                {{ emp.employee_name }}
              </div>
              <v-list-item-title class="text-h5 mb-1">
                Salary: {{ emp.employee_salary }}
              </v-list-item-title>
              <v-list-item-title class="text-h5 mb-1"> </v-list-item-title>
              <v-list-item-subtitle>
                Age: {{ emp.employee_age }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-hover>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Employees",
  data() {
    return {
      select: null,
      model: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      items: ["20-30", "31-40", "41-50"],
    };
  },
  created() {
    this.fetchEmployees();
  },

  methods: {
    ...mapActions(["fetchEmployees"]),
    filterByAge() {
      console.log(this.select);
      this.allEmployees.filter(
        (x) =>
          this.select.split("-")[0] < x.employee_age < this.select.split("-")
      );
    },
  },
  computed: mapGetters(["allEmployees"]),
};
</script>