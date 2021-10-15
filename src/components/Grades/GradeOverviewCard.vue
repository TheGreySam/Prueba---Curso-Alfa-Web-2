<template>
  <v-card>
    <v-image :src="value.imagen" contain></v-image>
    <v-card-text>
      <v-card-title>{{value.nombre}}</v-card-title>
      <v-timeline>
        <v-timeline-item color="purple">
          Costo: {{value.costo}}
          <br>
          Duracion: {{value.duracion}}
        </v-timeline-item>
        <v-timeline-item color="purple">
          Cupos: {{value.cupos}}
          <br>
          Completado: {{value.estado ? "si" : "no"}}
        </v-timeline-item>
        <v-timeline-item color="purple">
          Fecha de registro
          <br>
          {{value.fecha_registro}}

        </v-timeline-item>
        <v-timeline-item color="purple">
          descripcion
          <br>
          {{value.descripcion}}
        </v-timeline-item>
      </v-timeline>
      <v-card-subtitle>{{value.descripcion}}</v-card-subtitle>
      <v-card-text>Costo: {{value.costo}}</v-card-text>
      <v-card-text>Duracion: {{value.duracion}}</v-card-text>
      <v-card-text>Cupos: {{value.cupos}}</v-card-text>


    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["value"],
};

</script>
