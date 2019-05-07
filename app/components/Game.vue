<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" :to="actionA"> {{ messageA }} </router-link>
    <router-link class="button" :to="actionB" v-if="actionB">{{ messageB }}</router-link>
    <router-link class="button" :to="actionC" v-if="actionC">{{ messageC }}</router-link>
    <router-link class="button" :to="actionD" v-if="actionD">{{ messageD }}</router-link>
    <router-link class="button" :to="actionE" v-if="actionE">{{ messageE }}</router-link>
    <router-link class="button" :to="actionF" v-if="actionF">{{ messageF }}</router-link>
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
      messageC() {
        return game[this.id].messageC;
      },
      actionC() {
        return game[this.id].actionC;
      },
      messageD() {
        return game[this.id].messageD;
      },
      actionD() {
        return game[this.id].actionD;
      },
      messageE() {
        return game[this.id].messageE;
      },
      actionE() {
        return game[this.id].actionE;
      },
      messageF() {
        return game[this.id].messageF;
      },
      actionF() {
        return game[this.id].actionF;
      },
      fin() {
        return game[this.id].fin;
      }
    }
};
</script>
