<template>
    <div>
      <v-container justify-center class="d-flex">
        <v-card
      loading
      shaped
      elevation="2"
      max-width="600pt" 
      >
      <br>
        <v-card-title class="p-2">
          <h1>Editar curso: {{$route.params.id}}</h1>
        </v-card-title>
        <br>
        <v-card-text>
          <v-form @submit.prevent="guardarCambios" ref="formulario">
            <v-text-field :disabled="loading" v-model="grade.nombre" label="Nombre"></v-text-field>
            <v-text-field :disabled="loading" v-model.number="grade.cupos" type="number" label="Cupos"></v-text-field>
            <v-text-field :disabled="loading" v-model.number="grade.inscritos" type="number" label="Inscritos"></v-text-field>
            <v-text-field :disabled="loading" v-model="grade.duracion" label="Duracion"></v-text-field>
            <v-text-field :disabled="loading" v-model.number="grade.costo" type="number" label="Costo"></v-text-field>
            <v-switch :disabled="loading" v-model="grade.estado" label="Estado"></v-switch>
            <v-row>
              <v-col>
                <v-btn type="submit" color="success" :loading="loading">Guardar</v-btn>
              </v-col>
              <v-col>
                <v-btn color="primary-outline" to="/cursos">Atras</v-btn>
              </v-col>
            </v-row>
            
        </v-form>
        </v-card-text>
      </v-card>
      </v-container>

    </div>
</template>

<script>
import Firebase from "firebase"


export default {
  beforeRouteEnter(to, from, next) {
    Firebase.firestore()
      .collection("cursos")
      .doc(to.params.id)
      .get()
      .then((document) => {
        next((vm) => {
          vm.grade = { id: document.id, ...document.data() };
        });
      });
  },

  data: () => ({
    grade: {},
    loading: false,
  }),

  methods: {
    guardarCambios() {
      if (this.$refs.formulario.validate()) {
        this.loading = true;
        Firebase.firestore()
          .collection("cursos")
          .doc(this.grade.id)
          .update(this.grade)
          .then(() => {
            this.loading = false;
            this.$router.push("/cursos");
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>
