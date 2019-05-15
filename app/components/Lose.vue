<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <button class="button" @click="goToHome">Go to Home</button>
  </div>
</template>

<script>
// localStorage.setItem("charName", "" );
export default {
   methods: {
  goToHome() {
      localStorage.setItem("charName", "" );
      this.$router.push({ name: "home" });
    }
  },
  data() {
    return {
      message: 'Lose'
    };
  }
};
</script>
