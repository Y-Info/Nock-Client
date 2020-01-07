<template>
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
    <router-link to="/add-post">
      <img
        class="addPost"
        src="../assets/icons/add.svg"
        alt="lien create post"
      />
    </router-link>
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
</template>

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
</style>
