<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex text-center fill-height">
      <v-row class="d-flex justify-center">
        <v-col cols="auto">
          <v-list :items="items" density="compact" active-color="primary">
          </v-list>
        </v-col>
        <v-col>
          <router-view v-slot="{ Component }">
            <transition name="route">
              <component :is="Component" />
            </transition>
          </router-view>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
const items = [
  {
    title: "Right View #1",
    props: {
      prependIcon: "$arrowRight",
      //   to: { name: "Right", params: { id: 1 } },
      // switch this two lines to fix the problem
      to: { name: "Right" },
    },
  },
  {
    title: "Right View #2",
    props: {
      prependIcon: "$arrowRight",
      //   to: { name: "Right2", params: { id: 1 } },
      // switch this two lines to fix the problem
      to: { name: "Right2" },
    },
  },
];
</script>
