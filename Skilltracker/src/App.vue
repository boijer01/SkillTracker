<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>


    <div class="wrapper">
      <nav>
        <!--<RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>

body {
  background-color: #080C26;
}
</style>
