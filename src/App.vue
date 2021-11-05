<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Candidate Overview</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <LoadMore />
      <!-- <Employees /> -->
    </v-main>
  </v-app>
</template>

<script>
import LoadMore from "./components/LoadMore";
// import Employees from "./components/Employees";

export default {
  name: "App",
  components: {
    LoadMore,
    // Employees,
  },
};
</script>
