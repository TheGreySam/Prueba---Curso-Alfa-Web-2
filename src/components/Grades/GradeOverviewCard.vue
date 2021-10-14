<template>
  <v-app >
    <v-container class="mt-5"></v-container>
    <v-container class="mt-5 text-center">
      <h1>LISTA DE CURSOS</h1>
    </v-container>
    <v-container fluid class="mt-5">
      <v-row>
        <v-col v-for="curso in cursos" :key="curso.id" cols="12" sm="3" md="4">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="curso.imagen" height="200px"></v-img>

            <v-card-title class="text-center">{{ curso.nombre }}</v-card-title>

            <v-card-subtitle>{{ curso.descripcion }}</v-card-subtitle>
            <v-card-text>Costo: {{ curso.costo }} </v-card-text>
            <v-card-text>Duracion: {{ curso.duracion }}</v-card-text>
            <v-card-text>Cupos: {{ curso.cupos }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>

  <!-- <v-container>
      <pre>{{ cursos }}</pre>
    </v-container> -->
