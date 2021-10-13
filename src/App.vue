<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Navbar @toggle-drawer="drawer = !drawer"/>
      <Sidebar v-model="drawer"/>
      

      
   

    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
      <pre>{{cursos}}</pre>

      
    </v-main>
  </v-app>
</template>

<script>
import Firebase from "firebase";
export default {
  name: "App",

  data: () => ({
    cursos: []
  }),

  mounted() {
    Firebase.firestore().collection("cursos").get().then(documents => {
      documents.forEach(document => {
        this.cursos.push({id: document.id, ...document.data()})
      })
    })
  }
};
</script>
