<template>
    <v-app>
      <Navbar />
      <v-parallax
      height="100%"
    dark
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Abstract-background-white-12.jpg/2560px-Abstract-background-white-12.jpg"
    contain
  >
  <br>
       <transition mode="out-in" name="fade">
          <router-view  />
        </transition>
        
      </v-parallax>
      <Footer/>
    </v-app>
  
</template>

<script>
export default {
  components: {
    Navbar: () => import("./components/App/Navbar"),
    Footer: () => import("./components/App/Footer.vue")
  },
  name: "App",
  data: () => ({}),
  mounted() {
    this.$store.dispatch("session/subscribeToAuthStateChange");
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
