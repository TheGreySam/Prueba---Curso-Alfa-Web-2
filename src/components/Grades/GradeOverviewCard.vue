<template>
<v-container>
    <v-card
    class="mx-auto pa-md-4"
    max-width="344"
  >
    <v-img
      :src="value.imagen"
      height="200px"
      contain
      class="pa-6"
    ></v-img>

    <v-card-title>
      {{value.nombre}}
    </v-card-title>

    <v-card-subtitle>
      {{value.descripcion}}
    </v-card-subtitle>

    <v-card-text class="py-0">
      <v-timeline
      align-top
      dense
      >
      <v-timeline-item
      color="purple"
      small
      >
        <v-row class="pt-1">
          <v-col >
             Costo: {{value.costo}}
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item
      color="blue"
      small
      >
        <v-row class="pt-1">
          <v-col >
             Duracion: {{value.duracion}}
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item
      color="yellow"
      small
      >
        <v-row class="pt-1">
          <v-col >
             Cupos: {{value.cupos}}
          </v-col>
        </v-row>
      </v-timeline-item>
      <v-timeline-item
      color="red"
      small
      >
        <v-row class="pt-1">
          <v-col >
             Completado: {{value.estado ? "si" : "no"}}
          </v-col>
        </v-row>
      </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
  
</v-container>

</template>


<script>
export default {
  props: ["value"],
  
};

</script>
