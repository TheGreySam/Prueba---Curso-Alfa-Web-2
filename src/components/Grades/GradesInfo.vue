<!--template>
  <v-container>
    <v-data-table 
  :items="$store.state.grades.data" 
  :headers="headers"
  class="pa-md-5 mx-auto"
  >
    <template v-slot:[`item.costo`]="{ item }">
      <v-chip color="success">${{ item.costo.toLocaleString() }}</v-chip>
    </template>

    <template v-slot:[`item.estado`]="{ item }">
      <v-chip :color="item.estado ? 'info' : 'grey'">
        {{ item.estado ? "Si" : "No" }}
      </v-chip>
    </template>

    <template v-slot:[`item.fecha_creacion`]="{ item }">
      <v-chip color="success">
        {{ item.fecha_creacion ? item.fecha_creacion : "Sin información" }}
      </v-chip>
    </template>

  </v-data-table>
  <br>
  
  </v-container>
</template-->

<!--template>
  <v-card
    class="pa-md-5 mx-auto"
    max-width="1100"
    tile
  >
    <v-list rounded>
      
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template-->

<template>
  <v-card
    class="pa-md-5 mx-auto"
    max-width="1100"
    tile
  >
    <v-list rounded>
      <v-list-item-group 
      >
        <v-list-item 
          outline
        >
          <v-list-item-icon >
            <v-icon color="purple">mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="purple--text">Cantidad total de alumnos permitidos: 190 alumnos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          outline
        >
          <v-list-item-icon >
            <v-icon color="blue">mdi-account-multiple-check</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="blue--text">Cantidad total de alumnos inscritos: 103 alumnos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          outline
        >
          <v-list-item-icon >
            <v-icon color="red">mdi-account-clock</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="red--text">Cantidad total de cupos restantes: 87 alumnos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          outline
        >
          <v-list-item-icon >
            <v-icon color="pink">mdi-cancel</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="pink--text">Cantidad total de cursos terminados: 2 cursos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          outline
        >
          <v-list-item-icon >
            <v-icon color="brown">mdi-bell-ring</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="brown--text">Cantidad total de cursos activos: 4 cursos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          outline
        >
          <v-list-item-icon >
            <v-icon color="orange">mdi-bell-ring</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="orange--text">Cantidad total de cursos: 6 cursos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>


<script>
  export default {
    data: () => ({
    headers: [
      { text: "Curso", value: "nombre" },
      { text: "Cupos", value: "cupos" },
      { text: "Inscritos", value: "inscritos" },
      { text: "Duración", value: "duracion" },
      { text: "Costo", value: "costo" },
      { text: "Terminado", value: "estado" },
      { text: "Fecha", value: "fecha_creacion" },
      { text: "Acciones", value: "actions" },
    ],
  }),
//    data: () => ({
//      selectedItem: 1,
//      items: [
//        { text: 'Cantidad total de alumnos permitidos:', icon: 'mdi-account-group' },
//        { text: 'Cantidad total de alumnos inscritos:', icon: 'mdi-account-multiple-check' },
//        { text: 'Cantidad total de cupos restantes:', icon: 'mdi-account-clock' },
//        { text: 'Cantidad total de cursos terminados:', icon: 'mdi-cancel' },
//        { text: 'Cantidad total de cursos activos:', icon: 'mdi-bell-ring' },
//        { text: 'Cantidad total de cursos:', icon: 'mdi-bell-ring' },
//      ],
//    }),
  }
</script>