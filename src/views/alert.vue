<template>
  <div>
    <div>
      <menuRight />
      <menu-bottom />

      <div v-for="post in buildingPosts" :key="post._id" class="content">
        <div class="marge">
          <div class="userPost">
            <img src="../assets/img/profilUser.svg" alt="Photo de profil" />
            <p class="name">
              {{ post.author.lastName }} <br />{{ post.author.firstName }}
            </p>
            <p class="time">{{ post.creationDate }}</p>
          </div>
          <h3>{{ post.title }}</h3>
          <p>
            {{ post.description }}
          </p>
          <img
            class="imagePost"
            src="../assets/img/imgAlert.png"
            alt="Image post Alert"
          />
          <div class="actionPost">
            <div class="comment">
              <img
                src="../assets/icons/comment.svg"
                id="button"
                alt="Icon commentaire"
              />
              <span class="numberComment">{{ post.comments.length }}</span>
            </div>
            <img
              v-if="isAdmin === true"
              class="delete"
              src="../assets/icons/delete.svg"
              alt="Icon suppression"
              @click="deletePost(post._id)"
            />
          </div>
          <div>
            <div
              class="commentUser"
              v-for="comment in post.comments"
              :key="comment._id"
            >
              <div class="userPost">
                <img src="../assets/img/profilUser.svg" alt="Photo de profil" />
                <p class="name">
                  {{ comment.author.lastName }} <br />{{
                    comment.author.firstName
                  }}
                </p>
              </div>
              <p>
                {{ comment.content }}
              </p>
              <div class="actionPost">
                <img
                  v-if="isAdmin === true"
                  class="delete"
                  src="../assets/icons/delete.svg"
                  alt="Icon suppression"
                  @click="deleteComment(comment._id)"
                />
              </div>
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
      .then(allPosts => (this.buildingPosts = allPosts.data.feed.posts));
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
        width: 90%;
        display: inline-block;
        vertical-align: top;
        box-sizing: border-box;

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
.commentUser:nth-child(1) {
  margin-top: 10px;
}
.commentUser {
  border-top: #ccc 1px solid;
  padding: 20px 0;
  background: #fff;
  width: 100%;

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
  .delete {
    display: flex;
    justify-content: space-between;
    vertical-align: top;
    box-sizing: border-box;
    width: 18px;
    height: 18px;
  }
}
</style>
