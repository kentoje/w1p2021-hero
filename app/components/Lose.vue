<template>
  <div class="big-header">
    <h1>{{ message }} en {{ nbEtape }} etapes</h1>
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
      message: "Perdu"
    };
  }
};
</script>
