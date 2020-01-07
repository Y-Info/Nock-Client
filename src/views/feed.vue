<template>
  <div>
    <div>
      <menu-right :title="building.name" />
      <menu-bottom />
      <div v-for="(post, index) in posts" :key="index" class="content">
        <div class="userPost">
          <img src="../assets/img/profilUser.svg" alt="Photo de profil" />
          <p class="name">
            {{ post.author.lastName }} <br />{{ post.author.firstName }}
          </p>
          <p class="time">Il y a 1h</p>
        </div>
        <h3>{{ post.name }}</h3>
        <p>
          {{ post.content }}
        </p>
        <div class="actionPost">
          <div class="comment" @click="post.isComments = !post.isComments">
            <img
              src="../assets/icons/comment.svg"
              id="button"
              alt="Icon commentaire"
            />
            <span class="numberComment">214</span>
          </div>
          <img
            v-if="isAdmin === true"
            class="delete"
            src="../assets/icons/delete.svg"
            alt="Icon suppression"
          />
        </div>
        <div v-if="post.isComments">
          <div class="commentUser" v-for="(comment, index) in post.comments" :key="index">
            <div class="userPost">
              <img src="../assets/img/profilUser.svg" alt="Photo de profil" />
              <p class="name">{{ comment.author.lastName }} <br />{{ comment.author.firstName }}</p>
              <p class="time">A commenté il y a 1h</p>
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
              />
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

export default {
  components: {
    menuBottom,
    menuRight
  },
  data() {
    return {
      isAdmin: true,
      building: {
        name: "Ynov le S"
      },
      posts: [
        {
          name: "Mon poste",
          author: {
            firstName: "Yes",
            lastName: "Myfriend"
          },
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m",
          isComments: false,
          comments: [
            {
              author: {
                firstName: "Yes",
                lastName: "Myfriend"
              },
              content: "Ouais super idée !"
            },
            {
              author: {
                firstName: "Yes",
                lastName: "Myfriend"
              },
              content: "Ouais super idée !"
            },
            {
              author: {
                firstName: "Yes",
                lastName: "Myfriend"
              },
              content: "Ouais super idée !"
            }
          ]
        },
        {
          name: "Mon chat a volé les poubelles",
          author: {
            firstName: "Jesuis",
            lastName: "leboss"
          },
          content:
            "Il faut essayé de retrouver mon chat qui a volé les poubelles de l'immeuble.",
          isComments: false,
          comments: [
            {
              author: {
                firstName: "Yes",
                lastName: "Myfriend"
              },
              content: "J'ai retrouvé le chat !"
            }
          ]
        },
        {
          name: "Poubelles trouvées",
          author: {
            firstName: "Lalala",
            lastName: "Okok"
          },
          content: "Lorem ipsum dolor sit ame Ut enim ad m",
          isComments: false,
          comments: [
            {
              author: {
                firstName: "Yes",
                lastName: "Myfriend"
              },
              content: "Ouais super idée !"
            }
          ]
        },
        {
          name: "Poubelles trouvées",
          author: {
            firstName: "Lalala",
            lastName: "Okok"
          },
          content: "Lorem ipsum dolor sit ame Ut enim ad m",
          isComments: false,
          comments: [
            {
              author: {
                firstName: "Yes",
                lastName: "Myfriend"
              },
              content: "Ouais super idée !"
            }
          ]
        },
        {
          name: "Poubelles trouvées",
          author: {
            firstName: "Lalala",
            lastName: "Okok"
          },
          content: "Lorem ipsum dolor sit ame Ut enim ad m",
          isComments: false,
          comments: [
            {
              author: {
                firstName: "Yes",
                lastName: "Myfriend"
              },
              content: "Ouais super idée !"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 12px;
}

.z-index-1 {
  z-index: -1;
}

.content {
  position: relative;
  width: 90%;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 20px;

  -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);

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

  h3 {
    margin-top: 20px;
    font-size: 14px;
  }

  .actionPost {
    margin-top: 20px;
    display: block;

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
    .delete {
      display: inline-block;
      vertical-align: top;
      box-sizing: border-box;
      width: 18px;
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
