<template>
  <div>
    <div>
      <menu-right :title="building.name" />
      <menu-bottom />
      <div v-for="(post, index) in posts" :key="index" class="content">
        <div class="userPost">
          <img src="../assets/img/profilUser.svg" alt="Photo de profil" />
          <p class="name">{{ post.author.lastName }} <br />{{ post.author.firstName }}</p>
          <p class="time">Il y a 1h</p>
        </div>
        <h3>{{ post.name }}</h3>
        <p>
          {{ post.content }}
        </p>
        <div class="actionPost">
          <div class="comment" @click="isComments = !isComments">
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
      </div>
      <div v-if="isComments" class="commentUser">
        <div class="userPost">
          <img src="../assets/img/profilUser.svg" alt="Photo de profil" />
          <p class="name">Nom <br />Prénom</p>
          <p class="time">A commenté il y a 1h</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
      isComments: false,
      building: {
        name: 'Ynov le S'
      },
      posts: [
        {
          name: "Mon poste",
          author: {
            firstName: "Yes",
            lastName: "Myfriend"
          },
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m"
        },
        {
          name: "Mon chat a volé les poubelles",
          author: {
            firstName: "Jesuis",
            lastName: "leboss"
          },
          content: "Il faut essayé de retrouver mon chat qui a volé les poubelles de l'immeuble."
        },
        {
          name: "Poubelles trouvées",
          author: {
            firstName: "Lalala",
            lastName: "Okok"
          },
          content: "Lorem ipsum dolor sit ame Ut enim ad m"
        },
        {
          name: "Poubelles trouvées",
          author: {
            firstName: "Lalala",
            lastName: "Okok"
          },
          content: "Lorem ipsum dolor sit ame Ut enim ad m"
        },
        {
          name: "Poubelles trouvées",
          author: {
            firstName: "Lalala",
            lastName: "Okok"
          },
          content: "Lorem ipsum dolor sit ame Ut enim ad m"
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

.commentUser {
  -webkit-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.5);
  background: #fff;
  margin-top: -5px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  padding: 20px;

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
  }
}
</style>
