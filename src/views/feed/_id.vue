<template>
  <div>
    <div>
      <menuRight />
      <menu-bottom />
      <div class="content">
        <div class="userPost">
          <img src="../../assets/img/profilUser.svg" alt="Photo de profil" />
          <p class="name">Nom <br />Prénom</p>
          <p class="time">Il y a 1h</p>
        </div>
        <h3>Titre du post</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div class="actionPost">
          <div class="comment">
            <img
              src="../../assets/icons/comment.svg"
              id="button"
              alt="Icon commentaire"
            />
            <span class="numberComment">214</span>
          </div>
          <img
            v-if="isAdmin === true"
            class="delete"
            src="../../assets/icons/delete.svg"
            alt="Icon suppression"
          />
        </div>
      </div>
      <h3>Titre du post</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div class="actionPost">
        <div class="comment">
          <img
            src="../../assets/icons/comment.svg"
            id="button"
            alt="Icon commentaire"
          />
          <span class="numberComment">214</span>
        </div>
        <img
          class="delete"
          src="../../assets/icons/delete.svg"
          alt="Icon suppression"
        />
      </div>
    </div>
    <img
      v-if="isAdmin === true"
      class="delete"
      src="../../assets/icons/delete.svg"
      alt="Icon suppression"
    />
    <div class="commentUser">
      <div class="userPost">
        <img src="../../assets/img/profilUser.svg" alt="Photo de profil" />
        <p class="name">Nom <br />Prénom</p>
        <p class="time">Il y a 1h</p>
      </div>
      <h3>Titre du post</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div class="actionPost">
        <div class="comment">
          <img
            src="../../assets/icons/comment.svg"
            id="button"
            alt="Icon commentaire"
          />
          <span class="numberComment">214</span>
        </div>
        <img
          v-if="isAdmin === true"
          class="delete"
          src="../../assets/icons/delete.svg"
          alt="Icon suppression"
        />
      </div>
    </div>
  </div>
</template>

<script>
import menuBottom from "../../components/menu-bottom";
import menuRight from "../../components/menu-right";

export default {
  components: {
    menuBottom,
    menuRight
  },
  data() {
    return {
      isAdmin: false
    };
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 12px;
}

.content {
  z-index: 1000;
  position: relative;
  width: 90%;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
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

    .content {
      z-index: 1000;
      position: relative;
      width: 90%;
      background-color: #ffffff;
      margin-left: auto;
      margin-right: auto;
      margin-top: 50px;
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
      z-index: -1000;
      position: absolute;
      content: "";
      background-color: #f8f8f8;
      width: 90%;
      left: 50%;
      top: 50%;
      transform: translateX(-50%);
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
}
</style>
