<template>
  <div>
    <menu-connect route="/" />
    <h2>Connexion</h2>
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
import axios from "axios";
import store from "../store/index";

export default {
  components: {
    menuConnect
  },
  created() {
    if (store.getters.getConnectionInfos.user.id !== null) {
      this.$router.push("/feed");
    }
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      users: null,
      userToken: null,
      statusCode: null,
      buildingId: null
    };
  },
  methods: {
    checkForm() {
      if (this.user.email !== "") {
        if (this.user.password !== "") {
          axios
            .post("https://nock-nock.herokuapp.com/api/auth/login", {
              email: this.user.email,
              password: this.user.password
            })
            .then(res => {
              this.userToken = res.data.token;
              store.state.user.token = res.data.token;
              store.state.user.id = res.data.userId;
              store.state.user.buildingId = res.data.buildingId;
              this.buildingId = res.data.buildingId;
              setTimeout(() => {
                this.goToFeed();
              }, 500);
            })
            .catch(err => (this.statusCode = err.response.status));
        } else {
          this.$toasted.error("Le mot de passe ne peut pas être vide", {
            theme: "toasted-primary",
            position: "top-right",
            duration: 3000
          });
        }
      } else {
        this.$toasted.error("L'email ne peut pas être vide", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 3000
        });
      }
    },
    goToFeed() {
      if (
        (this.statusCode !== 200 && this.userToken === null) ||
        this.userToken === undefined
      ) {
        this.$toasted.error("Erreur lors de la connection", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 3000
        });
      } else {
        if (store.state.user.buildingId !== null) {
          this.$router.push("/feed");
        } else {
          this.$router.push("/find-room");
        }
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
      backface-visibility: hidden;
      pointer-events: none;
      font-size: 22px;
    }
  }
}
</style>
