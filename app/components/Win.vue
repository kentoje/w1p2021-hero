<template>
  <div class="big-header" :class="backgroundChoice">
    <h1>{{ message }} en {{ nbEtape }} étapes.</h1>
    <br>
    <button class="button" @click="goToHome">Go to Home</button>
  </div>
</template>

<script>
// localStorage.setItem("charName", "" );
export default {
  computed: {
    nbEtape() {
      return localStorage.getItem("nbEtape");
    },
    backgroundChoice() {
      if(localStorage.getItem('charName') == "Tristan"){
        return 'tristanWin'
      } else {
        return 'kentoWin'
      }
    }
  },
  methods: {
    goToHome() {
      localStorage.setItem("charName", "");
      localStorage.setItem("nbEtape", 0);
      localStorage.setItem("phase", "" );
      this.$router.push({ name: "home" });
    }
  },
  data() {
    return {
      message: "Vous avez gagné"
    };
  }
};
</script>