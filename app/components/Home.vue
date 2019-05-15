<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <button class="button" @click="goToChar">Go to character select</button>
  </div>
</template>

<script>
// localStorage.setItem("charName", "" );
export default {
  methods: {
  goToChar() {
      localStorage.setItem("charName", "" );
      this.$router.push({ name: "character" });
    }
  },
  data() {
    return {
      message: "Hello Hetic"
    };
  }
};
</script>
