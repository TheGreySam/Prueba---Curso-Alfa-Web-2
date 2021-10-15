<template>
    <div>
        <h1>Crear curso: {{$route.params.id}}</h1>

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
import { defineComponent } from '@vue/composition-api'

export default {
    data: () => ({
        loading: false,
        grade: {
            nombre: "",
            cupos: 0,
            inscritos: 0,
            duracion: "",
            costo: ,
            estado: "",
        }
    })
    },
})
</script>
