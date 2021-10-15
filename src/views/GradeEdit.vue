<template>
    <div>
        <h1>Editar curso: {{$route.params.id}}</h1>

        <v-form @submit.prevent="guardarCambios" ref="formulario">
            <v-text-field :disabled="loading" v-model="grade.nombre" label="Nombre"></v-text-field>
            <v-text-field :disabled="loading" v-model.number="grade.cupos"></v-text-field>
            <v-text-field :disabled="loading" v-model.number="grade.inscritos"></v-text-field>
            <v-text-field :disabled="loading" v-model="grade.duracion"></v-text-field>
            <v-text-field :disabled="loading" v-model.number="grade.costo" type="number"></v-text-field>
            <v-text-field :disabled="loading" v-model="grade.estado" label="Estado"></v-text-field>
            <v-switch v-model="grade.estado" label="Estado"></v-switch>
            <v-btn type="submit" color="success">Guardar</v-btn>
        </v-form>


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
            }, 
        
    },
    data: () => ({
        grade: null,
        loading: false
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
                .catch
            }
        }
    }
};
</script>
