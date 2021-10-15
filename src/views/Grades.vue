<template>
<div>
    <v-layout>
        <v-flex>
            <h1>Cursos</h1>
        </v-flex>
        <v-flex>
            <v-btn to="/cursos/crear">Crear Curso</v-btn>
        </v-flex>
    </v-layout>

    <GradesTable />

</div>
    
</template>

<script>
import Store from "../store";
import GradesTable from "../components/Grades/GradesTable.vue";

export default {
  components: { GradesTable },
  beforeRouteEnter(to, from, next) {
    Store.dispatch("grades/getAllGrades");
    next();
  },
};
</script>
