<template>
  <div>
    <menu-connect route="/validate-adress" />
    <form id="connect" @submit="checkForm" action="/" method="post">
      <div class="field-wrap">
        <label for="email"
          ><img src="../assets/icons/mailIcon.svg" alt="icon mail"
        /></label>
        <input
          class="email"
          type="email"
          name="email"
          id="email"
          v-model="email"
        />
      </div>

      <div class="field-wrap">
        <label for="password"
          ><img src="../assets/icons/lock-icon.svg" alt="icon mail"
        /></label>
        <input
          class="password"
          type="password"
          name="password"
          id="password"
          v-model="password"
          min="0"
        />
      </div>
      <router-link class="mdp" to="/">Mot de passe oublié ?</router-link>
    </form>

    <div class="button-container">
      <router-link class="buttonClick buttonBefore" to="/validate-adress">Continuer</router-link>
      <router-link class="buttonClick buttonAfter" to="/inscription">S'inscrire</router-link>
    </div>
  </div>
</template>

<script>
import menuConnect from "../components/menuConnect";
export default {
  components: {
    menuConnect
  }
};
</script>

<style lang="scss" scoped>
.button-container {
  font-family: Montserrat B, sans-serif;
  text-align: center;
  margin-top: 140px;
  font-size: 10px;
  text-transform: uppercase;

  .buttonClick {
    display: block;
    margin: 20px 10px 10px 10px;
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

  .buttonAfter {
    background-color: white;
    color: #2e3460;
  }
}

form {
  margin-top: 125px;
  display: block;
  position: relative;

  .mdp {
    position: absolute;
    bottom: -30px;
    right: 20px;
    font-size: 10px;
    text-decoration: none;
    color: #ffba00;
    font-family: Montserrat B, sans-serif;
  }
  .field-wrap {
    position: relative;
    margin-bottom: 40px;
    text-align: center;

    input {
      margin: 0 auto;
      border: none;
      border-bottom: #2e3460 1px solid;
      width: 90%;
      padding: 0 0 15px 45px;
      font-size: 14px;
      font-family: Montserrat B, sans-serif;
      color: #2e3460;
    }

    label {
      position: absolute;
      transform: translateY(6px);
      left: 20px;
      top: -10px;
      color: rgba($white, 0.5);
      transition: all 0.25s ease;
      -webkit-backface-visibility: hidden;
      pointer-events: none;
      font-size: 22px;
    }
  }
}
</style>
