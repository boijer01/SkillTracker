<script setup>
import learningBox from "../components/learningBox.vue";
</script>

<template>
  <main>
    <div class="upper-container">
      <div class="buttons-container">
        <Button class="p-button-lg" label="Submit" />
      </div>
      <div id="box">
        <learningBox />
      </div>
    </div>
  </main>
</template>


<style>
body {
  background-color: #080c26;
}

.upper-container {
  height: 40vh;
  background-color: #141743;
  overflow: auto; /* or 'hidden' if you don't want a scrollbar */
}

#box {
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: 5%;
  margin-top: 2%;
}
</style>

