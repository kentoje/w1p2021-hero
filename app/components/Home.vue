<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <video src="../assets/img/video2.mp4" type="video/mp4" muted autoplay></video>
    <br>
    <button class="button" @click="goToChar">Nouvelle partie</button>
    <button class="button" v-if="phase && char" @click="continueGame">Continuer</button>
  </div>
</template>

<script>
// localStorage.setItem("charName", "" );
export default {
  computed: {
    phase() {
      return localStorage.getItem("phase");
    },
    char() {
      return localStorage.getItem("charName");
    }
  },
  methods: {
    goToChar() {
      localStorage.setItem("charName", "");
      localStorage.setItem("nbEtape", 0);
      this.$router.push({ name: "character" });
    },
    continueGame() {
      this.$router.push({
        name: "game",
        params: { id: localStorage.getItem("phase") }
      });
    }
  },
  data() {
    return {
      message: "The Diamond Bank"
    };
  }
};
</script>
