<template>
<v-dialog v-model="dialog" with="500">
    <template v-slot:activator="{ on }">
         <v-btn v-on="on">
        Inicia sesion
        <v-icon> mdi-login
    </v-btn>
    </template>
    <v-card>
        <v-card-title>Inicia sesion</v-card-title>
        <v-card-text>
            <UserForm @success="s"/>
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