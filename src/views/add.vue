<template>
  <div>
    <menuRetourFeed route="/feed" :title="title" :txtButton="txtButton"/>
    <Event v-if="statutAdd==STATUT_EVENT" />
    <Post v-if="statutAdd==STATUT_POST" />
    <Survey v-if="statutAdd==STATUT_SURVEY" />
    <menuBottom />
  </div>
</template>

<script>
import Event from "../components/add-event";
import Post from "../components/add-post";
import Survey from "../components/add-survey";
import menuRetourFeed from "../components/menu-retour-feed";
import menuBottom from "../components/menu-bottom";

export default {
  components: {
    Event,
    Post,
    Survey,
    menuRetourFeed,
    menuBottom
  },
  data() {
    return {
      STATUT_EVENT: 1,
      STATUT_SURVEY: 2,
      STATUT_POST: 3
    };
  },
  props: {
    statutAdd: Number,
    title: String,
    txtButton: String
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 14px;
  text-align: center;
  font-weight: bold;
}

.text {
  font-size: 12px;
  text-align: center;
  line-height: 24px;
}

.button-container {
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 26px;
}

.images {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  img:first-child {
    width: 100%;
  }
  img {
    padding: 5px;
  }
  .second-row img {
    width: 50%;
  }
}
</style>
