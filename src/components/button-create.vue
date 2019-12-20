<template>
  <div>
    <div class="button-container">
      <router-link class="buttonClick buttonBefore" to="/feed">Créer {{ txtButton }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    txtButton: String
  }
};
</script>

<style lang="scss" scoped>
.button-container {
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 10px;
  text-transform: uppercase;
  margin-top: 100%;

  .buttonClick {
    display: block;
    margin: 20px 10px 10px 10px;
    width: 90%;
    padding: 18px 40px;
    border-radius: 5px;
    text-decoration: none;

    -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
    box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  }

  .buttonBefore {
    background-color: #2e3460;
    color: white;
  }
}
</style>
