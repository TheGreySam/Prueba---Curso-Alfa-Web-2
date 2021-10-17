<template>
<div>
  <div class="pa-2 d-flex justify-center black--text">
    <h1>Administracion</h1>
      
      
    
      
    </div>
    <div class="pa-2 d-flex justify-center">      
        <v-btn to="/cursos/crear" color="purple" dark>Agregar Curso</v-btn>
      
    </div>
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
