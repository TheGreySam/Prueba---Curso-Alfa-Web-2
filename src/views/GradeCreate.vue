<template>
    <div>
        <h1>Crear curso: {{$route.params.id}}</h1>

        <v-form @submit.prevent="guardarCambios" ref="formulario">
            <v-text-field :disabled="loading" v-model="grade.nombre" label="Nombre" :rules="required"></v-text-field>
            <v-text-field :disabled="loading" v-model.number="grade.cupos" :rules="required"></v-text-field>
            <v-text-field :disabled="loading" v-model.number="grade.inscritos" :rules="required"></v-text-field>
            <v-text-field :disabled="loading" v-model="grade.duracion" :rules="required"></v-text-field>
            <v-text-field :disabled="loading" v-model.number="grade.costo" type="number" :rules="required"></v-text-field>
            <v-text-field :disabled="loading" v-model="grade.estado" label="Estado" :rules="required"></v-text-field>
            <v-switch v-model="grade.estado" label="Estado" :rules="required"></v-switch>
            <v-btn type="submit" color="success" :loading="loading">Guardar</v-btn>
        </v-form>


    </div>
</template>

<script>
import Firebase from "firebase";

export default {
  data: () => ({
    loading: false,
    grade: {
      nombre: "",
      cupos: 0,
      inscritos: 0,
      duracion: "",
      costo: 0,
      estado: false,
      imagen: "",
    },
  }),
  methods: {
    guardarCambios() {
      if (this.$refs.formulario.validate()) {
        Firebase.firestore()
          .collection("cursos")
          .add(this.grade)
          .then(() => {
            this.loading = false;
            this.$router.push("/cursos");
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },
    required(v) {
      return !!v || "Este campo es obligatorio";
    },
  },
};
</script>
