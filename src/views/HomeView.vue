<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex text-center fill-height">
      <v-row class="d-flex justify-center">
        <v-col cols="auto">
          <v-btn :to="{ name: 'Right', params: { id: 1 } }"
            >Right View #1</v-btn
          >
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup></script>
