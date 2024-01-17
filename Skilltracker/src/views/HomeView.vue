<script setup>
import learningBox from "../components/learningBox.vue";
</script>

<template>
  <main>
    <div class="upper-container">
      <div class="left-section">
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          nobis assumenda eum ipsam nostrum nemo, possimus facere dicta harum
          ullam dolores beatae eaque fugiat laudantium, eligendi ipsum
          reprehenderit vel laborum?
        </h1>
      </div>

      <div class="center-section">
        <div class="buttons-container">
          <Button label="Learn" />
          <Button label="New" />
          <Button label="Trophies" />
        </div>
      </div>

      <div class="right-section">
        <learningBox />
      </div>
    </div>
  </main>
</template>

<!--
   <div class="buttons-container">
        <Button label="Learn" />
        <Button label="New" />
        <Button label="Trophies" />
      </div>

      <learn
-->


<style>
body {
  background-color: #080c26;
}

.upper-container {
  background-color: #141743;
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center; /* centers children horizontally */
  flex-direction: column;
  margin-top: 10%;
  gap: 20px; /* adds 20px of space between buttons */

}
.buttons-container button {
  width: 60%;
  height: 60px;
  font-size: 2rem;
  transition: 300ms;
   border-radius: 10px;
}

.buttons-container button:hover {
  border-radius: 20px;
  width: 65%;
}

.left-section,
.center-section,
.right-section {
  flex: 1;
}
</style>

