<template>
<v-container>
  <div>
  <div class="pa-2 d-flex justify-center black--text">
    <h1>Bienvenido a Alfa Web</h1>
    <br>
    
  </div>
  <br>
  <v-carousel cycle :show-arrows="false" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      contain
    ></v-carousel-item>
  </v-carousel>
</div>
<br>
</v-container>

  
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png',
          },
          {
            src: 'https://lineadecodigo.com/wp-content/uploads/2014/04/css.png',
          },
          {
            src: 'https://cuos.com.ar/img/tecnologias/js.png',
          },
          {
            src: 'https://i.blogs.es/545cf8/es6-logo/450_1000.png',
          },
          {
            src: 'https://thumbs.gfycat.com/PinkPiercingBull-size_restricted.gif'
          },
          {
            src: 'https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png'
          }
        ],
      }
    },
  }
</script>

<style></style>
