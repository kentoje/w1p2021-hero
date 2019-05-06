<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" :to="actionA"> {{ messageA }} </router-link>
    <router-link class="button" :to="actionB" v-if="actionB">{{ messageB }}</router-link>
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
      messageA() {
        return game[this.id].messageA;
      },
      actionA() {
        return game[this.id].actionA;
      },
      messageB() {
        return game[this.id].messageB;
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
