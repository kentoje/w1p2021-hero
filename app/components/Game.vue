<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <button class="button" @click="routerA"> {{ messageA }} </button>
    <button class="button" @click="routerB" v-if="actionB">{{ messageB }}</button>
    <button class="button" @click="routerC" v-if="actionC">{{ messageC }}</button>
    <button class="button" @click="routerD" v-if="actionD">{{ messageD }}</button>
    <button class="button" @click="routerE" v-if="actionE">{{ messageE }}</button>
    <button class="button" @click="routerF" v-if="actionF">{{ messageF }}</button>
    <button class="button" @click="routerBourrin" v-if='actionBourrin && thePersonnage == "Tristan"'>{{ messageBourrin }}</button>
    <button class="button" @click="routerNinja" v-if='actionNinja && thePersonnage == "Kento"'>{{ messageNinja }}</button>
    <p>{{ thePersonnage }}</p>
  </div>
</template>

<script>
import game from "../data/data.json";
// import personnage from '../personnage';

export default {
    data() {
      return { 
        fade: true
      }
    },
    
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
      messageBourrin() {
        return game[this.id].messageBourrin;
      },
      actionBourrin() {
        return game[this.id].actionBourrin;
      },
      messageNinja() {
        return game[this.id].messageNinja;
      },
      actionNinja() {
        return game[this.id].actionNinja;
      },
      fin() {
        return game[this.id].fin;
      },
      thePersonnage() {
        let charName = localStorage.getItem("charName")
        return charName;
      }
    },
    methods: {
      routerA() {
        if( game[this.$route.params.id].actionA == "lose" ){
          this.$router.push({ name: 'lose' })
        } else if (game[this.$route.params.id].actionA == "win") {
          this.$router.push({ name: 'win' })
        } else {
          this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionA } })
        }
      },
      routerB() {
        this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionB  } })
      },
      routerC() {
        this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionC } })
      },
      routerD() {
        this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionD } })
      },
      routerE() {
        this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionE  } })
      },
      routerF() {
        this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionF  } })
      },
      routerBourrin() {
        this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionBourrin  } })
      },
      routerNinja() {
        this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionNinja  } })
      },
    }
};
</script>
