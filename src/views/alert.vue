<template>
  <div>
    <div>
      <menuRight />
      <menu-bottom />
      <div class="content">
        <div class="marge">
          <div class="userPost">
            <img src="../assets/img/profilUser.svg" alt="Photo de profil" />
            <p class="name">Nom <br />Prénom</p>
            <p class="time">Il y a 1h</p>
          </div>
          <h3>Titre du post</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <img
            class="imagePost"
            src="../assets/img/imgAlert.png"
            alt="Image post Alert"
          />
          <div class="actionPost">
            <div class="comment">
              <img src="../assets/icons/comment.svg" alt="Icon commentaire" />
              <span class="numberComment">214</span>
            </div>
          </div>
        </div>
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
        `https://nock-nock.herokuapp.com/api/building/infos/${store.getters.getUserInfo.user.buildingId}/filter/alert`,
        {
          config
        }
      )
      .then(allPosts => {
        console.log(allPosts);
        (this.buildingPosts = allPosts.data.feed.posts);
      });
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 12px;
}
.content {
  width: 90%;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border: #dd232e 1px solid;

  -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);

  .marge {
    padding: 20px;

    .userPost {
      border-radius: 5px;

      img {
        display: inline-block;
        vertical-align: top;
        box-sizing: border-box;
        width: 40px;
        height: 40px;
      }

      .name {
        display: inline-block;
        vertical-align: top;
        box-sizing: border-box;
        width: 40%;
        margin: 0 10px;
        font-size: 12px;
        font-weight: 600;
      }

      .time {
        display: inline-block;
        vertical-align: top;
        box-sizing: border-box;
        width: calc(100% - (60px + 40%));
        margin: 0;
        font-size: 10px;
        font-weight: 400;
        text-align: right;
      }
    }
    .imagePost {
      width: 100%;
    }

    h3 {
      margin-top: 20px;
      font-size: 14px;
    }

    .actionPost {
      margin-top: 20px;

      .comment {
        img {
          width: 15px;
          display: inline-block;
          vertical-align: top;
          box-sizing: border-box;
        }

        span {
          display: inline-block;
          vertical-align: top;
          box-sizing: border-box;
          font-size: 12px;
          color: #dd232e;
          font-weight: 600;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
