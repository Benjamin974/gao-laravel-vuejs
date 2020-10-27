<template>
  <v-container>
    <datePicker :ordinateurs='ordinateurs' @addDate='getDate($event)' />
    <addOrdi @addOrdi="add($event)"/>
    <v-row>
      <v-col md="4" v-for="(ordinateur, key) in ordinateurs" :key="key">
        <ordinateurs :ordinateur="ordinateur" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script src='./home.js' />