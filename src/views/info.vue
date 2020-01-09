<template>
  <div>
    <div>
      <menuRight />
      <menu-bottom />
      <div class="content">
        <h3>Fiche de l'immeuble</h3>
        <img src="../assets/img/trash.jpg" alt="photo poubelle" />
        <p>
          Description de l'immeuble : Notre immeuble a été construit dans les
          années 1910 et comporte 4 étage. Le local à poubelle se trouve au rez
          de chaussez et vous pouvez trouver des trappes pour envoyé directement
          vos dechets au rez de chaussée.
        </p>
        <ul style="font-size: 0.8em">
          <li>Nombres d'étage : 4</li>
          <li>Emplacement local à poubelle : rez de chaussée</li>
          <li>Estimation nombre d'habitants : 40</li>
          <li>
            Document à imprimer : <br />
            <a href="http://www.google.com" target="_blank" style="color: red"
              >Fiche immeuble</a
            >
          </li>
        </ul>
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
