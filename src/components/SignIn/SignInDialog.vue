<template>
<v-dialog v-model="dialog" with="500">
    <template #activator="{ on }">
         <v-btn>
        Inicia sesion
        <v-icon> mdi-login
    </v-btn>
    </template>
    <v-card>
        <v-card-title>Inicia sesion</v-card-title>
        <v-card-text>
            <UserForm />
        </v-card-text>
    </v-card>
</v-dialog>
   
</template>

<script>
export default {
    components: { UserForm: () => import("./UserForm.vue")},
    data: () => ({
        dialog: false,
    })
}
</script>

<style scoped>

</style>