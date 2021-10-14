<template>
  <div>
    <h1>Lista de Cursos</h1>
    <v-layout row>
      <v-flex
      shrink
      v-for="grade in $store.state.grades.data" :key="grade.id">
        {{ grade }}

      </v-flex>
    </v-layout>
  </div>
</template>

<script>

export default {
  name: "Home",

  mounted(){
    this.$store.dispatch("grades/getAllGrades")
  }
};
</script>
