<template>
  <div>
    <form id="createSurvey" @submit="checkForm" action="/" method="post">
      <div class="field-wrap">
        <label for="question">Posez votre question : *</label>
        <input
          class="question"
          type="text"
          name="question"
          id="question"
          v-model="question"
        />
      </div>
    </form>
    <div class="responseContainer">
      <div class="customRadio"></div>
      <input
        class="response"
        type="text"
        name="response"
        id="response"
        v-model="response"
      />
      <div class="responsePlusContainer"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.responsePlus {
  font-size: 6vh;
}
.responseContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.customRadio {
  border: #efefef 2px solid;
  border-radius: 100%;
  margin-right: 15px;
  width: 3vh;
  height: 3vh;
}
.response {
  background-color: #f3f3f3;
  color: #efefef;
  font-family: "Montserrat", sans-serif;
  border: none;
  border-radius: 25px;
  width: 65%;
  padding: 12px;
  display: flex;
  justify-content: center;
}
h2 {
  margin-top: 70px;
  font-size: 14px;
  text-transform: uppercase;
  color: #ffba00;
  margin-left: 20px;
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
      border: #efefef 2px solid;
      width: 90%;
      padding: 0 0 20px 0px;
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
