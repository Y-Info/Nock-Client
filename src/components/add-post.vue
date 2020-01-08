<template>
  <div>
    <form id="createSurvey" @submit="checkForm" action="/" method="post">
      <div class="field-wrap">
        <label for="question">Titre*</label>
        <input class="titre" type="text" name="titre" id="titre" v-model="titre" />
      </div>
      <div class="field-wrap">
        <label for="question">Description*</label>
        <textarea class="question" id="question" row="20" colus="15" v-model="question"></textarea>
      </div>
      <div class="radioContainer">
        <!--<div class="customRadio"></div>-->
        <input class="checkbox" type="checkbox">
        <p class="txtUrgent">URGENT</p>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.button-container {
  margin-top: 25vh!important;
}
h2 {
  margin-top: 70px;
  font-size: 14px;
  text-transform: uppercase;
  color: #ffba00;
  margin-left: 20px;
}

.checkbox{              /* A retirer */
  display: inline-block;
}

.radioContainer{

margin: auto;
width: 90%;

/*.customRadio{
   border: #EFEFEF 2px solid;
   border-radius: 100%;
   margin-right: 15px;
   width: 3vh;
   height: 3vh;
   display: inline-block;
}*/

.txtUrgent{
  display: inline-block;
  font-family: Montserrat B, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
}
}

form {
  margin-top: 30px;
  display: block;
  position: relative;

  .mdp {
    position: absolute;
    bottom: -30px;
    right: 20px;
    font-size: 10px;
    text-decoration: none;
    color: #ffba00;
    font-family: Montserrat B, sans-serif;
  }

  .field-wrap {
    position: relative;
    margin-bottom: 40px;
    text-align: center;

    input {
      margin: 0 auto;
      border: #EFEFEF 2px solid;
      width: 90%;
      padding: 0 0 20px 0px;
      font-size: 14px;
      font-family: Montserrat B, sans-serif;
      color: black;
      margin-top: 4vh;
    }

    textarea {
      margin: 0 auto;
      border: #EFEFEF 2px solid;
      width: 90%;
      padding: 0 0 90px 0px;
      font-size: 14px;
      font-family: Montserrat B, sans-serif;
      color: black;
      margin-top: 4vh;
    }

    label {
      position: absolute;
      color: black;
      font-weight: bold;
      transition: all 0.25s ease;
      -webkit-backface-visibility: hidden;
      pointer-events: none;
    }
  }
}
</style>
