<template>
    <v-data-table 
    :item="$store.state.grades.data"
    :headers="headers"
    >
    <template v-slot:[`item.costo`]="{item}">
        <v-child color="success"> {{item.costo.toLocaleString()}}</v-child>
    </template>
    <template v-slot:[`item.estado`]="{item}">
        <v-chip :color="item.estado ? 'info' : 'grey'">
            {{item.estado ? "si" : "no"}}
            </v-chip>
    </template>
    <template v-slot:[`item.fecha_creacion`]="{item}">
        <v-chip color="success">
            {{item.fecha_creacion ? item.fecha_creacion : "Sin informacion"}}
        </v-chip>
    </template>
    <template v-slot=[`item.actions`]="{item}">
        <div>
            <v-btn icon>
                <v-icon>mdi-pencil
                </v-icon>
                </v-btn>
            <v-btn></v-btn>
            
        </div>
    </template>
    </template>
    </v-data-table>
</template>

<script>
export default {
    data: () => ({
        headers: [
            {
                text: "Curso",
                value: "nombre"
            },
            {
                text: "Cupos",
                value: "cupos"
            },
            {
                text: "Inscritos",
                value: "inscritos"
            },
            {
                text: "Duracion",
                value: "duracion"
            },
            {
                text: "Costo",
                value: "costo"
            },
            {
                text: "Estado",
                value: "estado"
            },
            {
                text: "Fecha",
                value: "fecha_creacion"
            },
            {
                text: "Acciones",
                value: ""
            },
        ]
    }),
    methods: {
        editar(item) {
            this.$router.push(`/cursos/${item.id}`)
            console.log("quiero editar el item => ", item);
        },
        borrar(item) {
            Firebase.firestore()
            .collection("cursos")
            .doc(item.id)
            .delete()
            .then(() => {
                this.$store.dispatch("grades/getAllGrades")
            })

            console.log("quiero borrar el item => ", item);
        }
    }
}
</script>
