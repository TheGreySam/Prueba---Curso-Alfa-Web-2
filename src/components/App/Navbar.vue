<template>
    <v-app-bar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-spacer></v-spacer>
        <SignInDialog />
        <SignOutDialog />
    </v-app-bar>
</template>

<script>
import SignInDialog from "./components/SignInDialog.vue"
import SignInDialog from "./components/SignInDialog.vue"
export default {
    components: SignInDialog, SignOutDialog
}
</script>