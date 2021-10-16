<template>
  <v-app-bar dark app color="purple" flat>
    <v-container class="fill-height py-0" >
      <v-avatar size="48" class="mr-10" color="white">
        <v-img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/At_sign.svg/1024px-At_sign.svg.png"
          
        ></v-img
      ></v-avatar>

      <transition-group name="fade" tag="div">
        <template v-if="$store.state.session.user">
          <v-btn
            v-for="(link, $index) in links"
            :key="$index"
            text
            :to="link.to"
          >
            <v-icon left>{{ link.icon }}</v-icon>
            {{ link.text }}
          </v-btn>
        </template>
      </transition-group>

      <v-spacer></v-spacer>

      <transition mode="out-in" name="fade">
        <template v-if="$store.state.session.user">
          <SignOutDialog />
        </template>
        <template v-else>
          <SignInDialog />
        </template>
      </transition>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  components: {
    SignInDialog: () => import("../SignIn/SignInDialog.vue"),
    SignOutDialog: () => import("../SignIn/SignOutDialog.vue"),
  },
  data: () => ({
    links: [
      {
        text: "Inicio",
        icon: "mdi-home",
        to: "/home",
      },
      {
        text: "Cursos",
        icon: "mdi-apps",
        to: "/cursos",
      },
    ],
  }),
};
</script>