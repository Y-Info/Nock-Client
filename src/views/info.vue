<template>
  <div>
    <div>
      <menuRight />
      <menu-bottom />
      <div class="content">
        <h3>Titre du l'infos</h3>
        <img src="../assets/img/trash.jpg" alt="photo poubelle" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet
          debitis eum odit quisquam quod sint, vel veniam. Assumenda deserunt
          eius est, exercitationem facilis ipsa nihil quasi soluta vero
          voluptatum?
        </p>
      </div>
      <div class="content">
        <h3>Titre du l'infos</h3>
        <img src="../assets/img/trash.jpg" alt="photo poubelle" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet
          debitis eum odit quisquam quod sint, vel veniam. Assumenda deserunt
          eius est, exercitationem facilis ipsa nihil quasi soluta vero
          voluptatum?
        </p>
      </div>
      <div class="content">
        <h3>Titre du l'infos</h3>
        <img src="../assets/img/trash.jpg" alt="photo poubelle" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet
          debitis eum odit quisquam quod sint, vel veniam. Assumenda deserunt
          eius est, exercitationem facilis ipsa nihil quasi soluta vero
          voluptatum?
        </p>
      </div>
    </div>
    <div class="content">
      <h3>Titre du l'infos</h3>
      <img src="../assets/img/trash.jpg" alt="photo poubelle" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet
        debitis eum odit quisquam quod sint, vel veniam. Assumenda deserunt eius
        est, exercitationem facilis ipsa nihil quasi soluta vero voluptatum?
      </p>
    </div>
    <div class="content">
      <h3>Titre du l'infos</h3>
      <img src="../assets/img/trash.jpg" alt="photo poubelle" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet
        debitis eum odit quisquam quod sint, vel veniam. Assumenda deserunt eius
        est, exercitationem facilis ipsa nihil quasi soluta vero voluptatum?
      </p>
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
