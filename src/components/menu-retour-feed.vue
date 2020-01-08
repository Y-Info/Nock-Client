<template>
  <div>
    <router-link :to="route">
      <img class="arrow" src="../assets/icons/arrow.svg" alt="flèche retour" />
    </router-link>
    <div class="title-container">
      <h2>Création de votre {{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    route: String,
    title: String
  }
};
</script>

<style lang="scss" scoped>
.title-container {
  height: 10vh;
  width: 70%;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
}
h2 {
  margin-top: 6.5vh;
  font-size: 14px;
  text-transform: uppercase;
  color: #ffba00;
  display: flex;
  justify-content: center;
}

.arrow {
  position: fixed;
  width: 20px;
  height: 20px;
  top: 40px;
  left: 20px;
}
</style>
