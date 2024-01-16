<script setup>
import learningBox from '../components/learningBox.vue'
</script>

<template>
  <main>
    <div class="upper-container">
      <div id=box>
    <learningBox />
      </div>
    </div>
  </main>
</template>


<style>

body {
  background-color: #080C26;
}

.upper-container {
  height: 40vh;
  background-color: #141743;
  overflow: auto; /* or 'hidden' if you don't want a scrollbar */
}


  
</style>

