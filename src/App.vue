<template>
    <v-app>
      <Navbar />
      <v-parallax
      height="100%"
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    contain
  >
  <transition mode="out-in" name="fade">
                <router-view />
              </transition>
      </v-parallax>
    </v-app>
  
</template>

<!--template>
  <v-app>
    <Navbar />

    <v-main class="grey lighten-3">
      <v-container>
        <v-row justify="center">
          <v-col cols>
            <v-sheet min-height="70vh" rounded="lg" class="pa-6">
              <transition mode="out-in" name="fade">
                <router-view />
              </transition>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template-->

<script>
export default {
  components: {
    Navbar: () => import("./components/App/Navbar"),
  },
  name: "App",
  data: () => ({}),
  mounted() {
    this.$store.dispatch("session/subscribeToAuthStateChange");
  },
};
</script>
