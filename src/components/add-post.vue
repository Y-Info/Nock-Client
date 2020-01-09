<template>
  <div>
    <form id="createSurvey" @submit.prevent="createPost" method="post">
      <div class="field-wrap">
        <label for="question">Titre*</label>
        <input
          class="titre"
          type="text"
          name="title"
          id="title"
          v-model="post.title"
        />
      </div>
      <div class="field-wrap">
        <label for="question">Description*</label>
        <textarea
          class="desc"
          id="desc"
          row="20"
          colus="15"
          v-model="post.desc"
        ></textarea>
      </div>
      <div class="radioContainer">
        <!--<div class="customRadio"></div>-->
        <input class="checkbox" type="checkbox" v-model="post.alert" />
        <p class="txtUrgent">URGENT</p>
      </div>
      <div>
        <!--<div class="button-container">
          <router-link class="buttonClick buttonBefore" to="/feed">Créer la publication</router-link>
        </div>-->
        <button type="submit" class="button-container">
          <div class="buttonClick buttonBefore">Créer la publication</div>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store/index";

export default {
  data() {
    return {
      post: {
        title: "",
        desc: "",
        alert
      },
      users: null,
      userToken: null,
      statusCode: null
    };
  },
  methods: {
    createPost() {
      const config = {
        headers: {
          Authorizations:
            "Bearer " + store.getters.getConnectionInfos.user.token
        }
      };
      axios
        .post(
          "https://nock-nock.herokuapp.com/api/post",
          {
            title: this.post.title,
            desc: this.post.desc,
            alert: this.post.alert,
            buildingId: store.getters.getConnectionInfos.user.buildingID,
            userId: store.getters.getConnectionInfos.user.userId
          },
          config
        )
        .then(() => {
          this.$router.push("/feed");
        })
        .catch(err => {
          this.$toasted.error("Erreur : " + err, {
            theme: "toasted-primary",
            position: "top-right",
            duration: 3000
          });
        });
    }
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
  margin-top: 20%;
  width: 90%;
  margin: auto;

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
h2 {
  margin-top: 70px;
  font-size: 14px;
  text-transform: uppercase;
  color: #ffba00;
  margin-left: 20px;
}

.checkbox {
  /* A retirer */
  display: inline-block;
}

.radioContainer {
  margin: auto;
  width: 90%;

  /*.customRadio{
   border: #EFEFEF 2px solid;
   border-radius: 100%;
   margin-right: 15px;
   width: 3vh;
   height: 3vh;
   display: inline-block;
}*/

  .txtUrgent {
    display: inline-block;
    font-family: Montserrat B, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
  }
}

form {
  margin-top: 30px;
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
      border: #efefef 2px solid;
      width: 90%;
      padding: 0 0 20px 0px;
      font-size: 14px;
      font-family: Montserrat B, sans-serif;
      color: black;
      margin-top: 4vh;
    }

    textarea {
      margin: 0 auto;
      border: #efefef 2px solid;
      width: 90%;
      padding: 0 0 90px 0px;
      font-size: 14px;
      font-family: Montserrat B, sans-serif;
      color: black;
      margin-top: 4vh;
    }

    label {
      position: absolute;
      color: black;
      font-weight: bold;
      transition: all 0.25s ease;
      backface-visibility: hidden;
      pointer-events: none;
    }
  }
}
</style>
