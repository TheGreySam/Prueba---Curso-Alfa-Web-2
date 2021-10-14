<template>
    <v-form ref="userForm" @submit.prevent="" v-model="form">
        <v-text-field 
        outlined
        label="Correo electronico"
        v-model="form.email"
        :rules="[required]"
        type="email"
        ></v-text-field>
        <v-text-field 
        outlined
        label="Contraseña"
        v-model="form.password"
        :rules="[required]"
        type="password"
        ></v-text-field>
        <v-layout justify-space-between>
            <v-btn color="success" type="submit">Crear</v-btn>
            <v-btn color="success" type="button" @click="resetValidation">
                Reiniciar validacion</v-btn>
                <v-btn color="success" type="button" @click="resetForm">
                Reiniciar formulario</v-btn>

        </v-layout>
        
    </v-form>
</template>

<script>
import Firebase from "firebase";
export default {
    data: () => ({
        form: { email: null, password: null }
    }),
    methods: {
        async handleFormSubmit() {
            if (this.$refs,userForm.validate()) {
                try {
                    await Firebase.auth().signInWithEmailAndPassword(
                        this.form.email,
                        this.form.password
                    );
                    
                    this.$store.dispatch("sesion/configurarUsuario",
                    Firebase.auth().currentUser);
                } catch (e) {
                    console.error(
                        "usuario no encontrado"
                    );
                }
            };
        },
        resetValidation() {
            this.$refs.userForm.resetValidation()
        },
        resetForm() {
            this.$refs.userForm.reset()
        },
        required(value) {
            return !!value || "Este campo es obligatorio";
        }
    }
}
</script>