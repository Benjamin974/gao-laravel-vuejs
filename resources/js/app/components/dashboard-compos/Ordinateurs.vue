<template>
  <v-card class="mx-auto" max-width="370" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1 text-center">
          {{ ordinateur.name }}
        </v-list-item-title>
        <v-row>
          <v-col md="4">Heure</v-col>
          <v-col md="4" class="text-center"> Nom </v-col>
          <v-col md="4" class="text-right">Actions</v-col>
        </v-row>
        <div v-for="(horaire, i) in horaires" :key="i">
          <v-row>
            <v-col md="2"> {{ horaire.horaire }}</v-col>
            <v-col md="8" class="text-center">{{ horaire.firstname }} </v-col>
            <v-col md="2"
              ><v-btn icon> <v-icon>mdi-delete</v-icon></v-btn></v-col
            >
          </v-row>
        </div>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script src='./ordinateur.js' />