<template>
  <div>
    <div class="menuBottom">
      <router-link to="/feed">
        <img class="feed" src="../assets/icons/feedIcon.svg" alt="lien feed" />
      </router-link>
      <router-link to="/alert">
        <img
          class="alert"
          src="../assets/icons/alerteIcon.svg"
          alt="lien alerte"
        />
      </router-link>
      <div>
        <img
          class="addPost"
          src="../assets/icons/add.svg"
          alt="lien create post"
          @click="openCloseAddPostMenu()"
        />
      </div>
      <router-link to="/calendar">
        <img
          class="calendar"
          src="../assets/icons/calendarIcon.svg"
          alt="lien calendrier"
        />
      </router-link>
      <router-link to="/info">
        <img
          class="info"
          src="../assets/icons/informationIcon.svg"
          alt="lien informations générales"
        />
      </router-link>
    </div>
    <div v-if="menuAddPostOpen" class="addPostMenu" @click="goToAddPost()">
      <img src="../assets/img/imagePost.png" alt="ajout d'un post" />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      menuAddPostOpen: false
    };
  },
  methods: {
    goToAddPost() {
      console.log("passe");
      this.$router.push("/add-post");
    },
    openCloseAddPostMenu() {
      this.menuAddPostOpen = !this.menuAddPostOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.menuBottom {
  z-index: 30;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  vertical-align: center;
  padding: 20px;
  background-color: #2e3460;
  width: 100%;

  .addPost {
    background-color: white;
    padding: 15px;
    border-radius: 50px;
    position: fixed;
    bottom: 40px;
    transform: translateX(-40%);

    -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
    box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  }
}
.addPostMenu {
  width: 100vw;
  height: 100vh;
  background-color: #303661;
  opacity: 0.7;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 10;
  img {
    height: 40px;
    margin-bottom: 15vh;
    border-radius: 50%;
  }
}
</style>
