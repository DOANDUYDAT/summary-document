<template>
  <!-- Sizes your content based upon application components -->
  <v-app>
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HomePage from "@/views/HomePage";

export default {
  components: {
    HomePage
  }
};
</script>