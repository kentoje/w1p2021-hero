<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/game/2">Go to phase 2</router-link>
    <router-link class="button" to="/game/3">Go to phase 3</router-link>
    <router-link class="button" to="/win">Go to Win</router-link>
    <router-link class="button" to="/lose">Go to Loose</router-link>
  </div>
</template>

<script>
import game from "../data/data.json";

export default {
    computed: {
      id() {
        return this.$route.params.id;
      },
      message() {
        return game[this.id].message;
      },
      actionA() {
        return game[this.id].actionA;
      },
      actionB() {
        return game[this.id].actionB;
      },
      fin() {
        return game[this.id].fin;
      }
    }
};
</script>
