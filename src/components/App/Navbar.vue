<template>
    <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>

        <v-spacer></v-spacer>
        <SignInDialog />
        <SignOutDialog />
    </v-app-bar>
</template>

<script>
import SignInDialog from "./components/SignInDialog.vue"
import SignInDialog from "./components/SignOutDialog.vue"
export default {
    components: SignInDialog, SignOutDialog
}
</script>