<template>
      <component :is="layout">
          <v-container grid-list-xl>
              <v-layout row wrap>
                  <v-flex xs10 offset-xs1>
                      <router-view></router-view>
                  </v-flex>
              </v-layout>
          </v-container>
      </component>
</template>

<script>

export default {
  name: 'App',
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'default'}-layout`;
    },
  },
  data() {
    return {
      //
    };
  },
};
</script>
