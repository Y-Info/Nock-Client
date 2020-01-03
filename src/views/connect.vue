<template>
  <div>
    <menu-connect route="/" />
    {{ users }}
    <h2>Connection</h2>
    <form id="connect" @submit.prevent="checkForm" method="post">
      <div class="field-wrap">
        <label for="email"
          ><img src="../assets/icons/mailIcon.svg" alt="icon mail"
        /></label>
        <input
          class="email"
          type="email"
          name="email"
          id="email"
          v-model="user.email"
          placeholder="Entrez votre email"
        />
      </div>

      <div class="field-wrap">
        <label for="password">
          <img src="../assets/icons/lock-icon.svg" alt="icon mail" />
        </label>
        <input
          class="password"
          type="password"
          name="password"
          id="password"
          v-model="user.password"
          min="0"
          placeholder="Entrez votre mot de passe"
        />
        <router-link class="mdp" to="/">Mot de passe oublié ?</router-link>
      </div>
      <div class="button-container">
        <button type="submit" class="buttonClick buttonBefore">
          Se connecter
        </button>
        <router-link class="buttonClick buttonAfter" to="/inscription">
          S'inscrire
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import menuConnect from "../components/menu-connect";
import apirequest from "../utils/apirequest";

export default {
  components: {
    menuConnect
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      users: null,
      userToken: null
    };
  },
  methods: {
    checkForm() {
      if (this.user.email !== "" && this.user.email !== "") {
        apirequest("/auth/login", {
          email: this.user.email,
          password: this.user.password
        });
        if (this.userToken !== null || this.userToken !== undefined) {
          this.$router.push("/find-room");
        } else {
          this.$toasted.error("Erreur lors de la connection", {
            theme: "toasted-primary",
            position: "top-right",
            duration: 3000
          });
        }
      } else {
        this.$toasted.error("Les champs sont vides", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 3000
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 70px;
  font-size: 14px;
  text-transform: uppercase;
  color: #ffba00;
  margin-left: 20px;
}
.button-container {
  text-align: center;
  margin-top: 140px;
  font-size: 10px;
  font-weight: bold;
  button,
  .buttonAfter {
    text-transform: uppercase;
    width: 95%;
    display: block;
    margin: 20px 10px 10px;
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
  margin-top: 80px;
  display: block;
  position: relative;
  .mdp {
    position: absolute;
    bottom: -30px;
    right: 20px;
    font-size: 10px;
    text-decoration: none;
    color: #ffba00;
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
