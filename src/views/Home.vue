<template>
  <div>
    <div class="pa-2 d-flex justify-center black--text">
      <h1>Lista de Cursos</h1>
    </div>
    
    <v-row>
      <v-col
        v-for="grade in $store.state.grades.data"
        :key="grade.id"
        cols="12"
        md="4"
      >
        <GradeOverviewCard :value="grade" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Store from "../store";
export default {
  name: "Home",
  components: {
    GradeOverviewCard: () =>
      import("../components/Grades/GradeOverviewCard.vue"),
  },
  beforeRouteEnter(to, from, next) {
    Store.dispatch("grades/getAllGrades");
    next();
  },
};
</script>
