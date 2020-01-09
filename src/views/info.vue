<template>
  <div>
    <div>
      <menuRight />
      <menu-bottom />
      <div v-for="post in buildingPosts" :key="post._id" class="content">
        <h3>{{ post.title }}</h3>
        <img src="../assets/img/trash.jpg" alt="photo poubelle" />
        <p v-html="post.description">
          {{ post.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import menuBottom from "../components/menu-bottom";
import menuRight from "../components/menu-right";
import axios from "axios";
import store from "../store/index";

export default {
  components: {
    menuBottom,
    menuRight
  },
  data() {
    return {
      isAdmin: store.getters.getUserInfo.user.isAdmin,
      buildingPosts: [],
      building: {
        name: "Ynov le S"
      }
    };
  },
  created() {
    const config = {
      headers: {
        Authorizations: "Bearer" + store.getters.getUserInfo.user.token
      }
    };
    axios
      .get(
        `https://nock-nock.herokuapp.com/api/building/infos/${store.getters.getUserInfo.user.buildingId}/filter/fiche`,
        {
          config
        }
      )
      .then(allPosts => (this.buildingPosts = allPosts.data.feed.posts));
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 90%;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  padding: 20px;

  -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);

  h3 {
    font-size: 14px;
    color: #2e3460;
  }
  p {
    font-size: 12px;
  }
  img {
    width: 100%;
  }
}
</style>
