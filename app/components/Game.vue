<template>
  <div class="game__content">
    <link rel="preload" href="../assets/img/bourin_lose.jpg">
    <link rel="preload" href="../assets/img/bourin_win.jpg">
    <link rel="preload" href="../assets/img/ninja_lose.jpg">
    <link rel="preload" href="../assets/img/ninja_win.jpg">
    <transition name="fadegame">
      <div class="big-header" v-if="fade">
        <img :src="img" v-if="img"/>
        <h1>{{ message }}</h1>  
        <div class="button__container" @click="handleFade">
          <button class="button" @click="routerA"> {{ messageA }} </button>
          <button class="button" @click="routerB" v-if="actionB">{{ messageB }}</button>
          <button class="button" @click="routerC" v-if="actionC">{{ messageC }}</button>
          <button class="button" @click="routerD" v-if="actionD">{{ messageD }}</button>
          <button class="button" @click="routerE" v-if="actionE">{{ messageE }}</button>
          <button class="button" @click="routerF" v-if="actionF">{{ messageF }}</button>
          <button class="button" @click="routerBourrin" v-if='actionBourrin && thePersonnage == "Tristan"'>{{ messageBourrin }}</button>
          <button class="button" @click="routerNinja" v-if='actionNinja && thePersonnage == "Kento"'>{{ messageNinja }}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import game from "../data/data.json";
const delay = 500;
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
      img() {
        return game[this.id].img;
      },
      thePersonnage() {
        let charName = localStorage.getItem("charName")
        return charName;
      }
    },
    methods: {
      routerA() {
        localStorage.setItem("phase", game[this.$route.params.id].actionA );
        setTimeout(() => {
          if( game[this.$route.params.id].actionA == "lose" ){
            this.$router.push({ name: 'lose' })
          } else if (game[this.$route.params.id].actionA == "win") {
            this.$router.push({ name: 'win' })
          } else {
            let nbEtape = parseInt(localStorage.getItem("nbEtape")) + 1;
            localStorage.setItem("nbEtape", nbEtape );
            this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionA } })
          }
        }, delay);
      },
      routerB() {
        let nbEtape = parseInt(localStorage.getItem("nbEtape")) + 1;
        localStorage.setItem("nbEtape", nbEtape );
        localStorage.setItem("phase", game[this.$route.params.id].actionB );
        setTimeout(() => {
          this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionB  } })
        }, delay);
      },
      routerC() {
        let nbEtape = parseInt(localStorage.getItem("nbEtape")) + 1;
        localStorage.setItem("nbEtape", nbEtape );
        localStorage.setItem("phase", game[this.$route.params.id].actionC );
        setTimeout(() => {
          this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionC } })
        }, delay);
      },
      routerD() {
        let nbEtape = parseInt(localStorage.getItem("nbEtape")) + 1;
        localStorage.setItem("nbEtape", nbEtape );
        localStorage.setItem("phase", game[this.$route.params.id].actionD );
        setTimeout(() => {
          this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionD } })
        }, delay);
      },
      routerE() {
        let nbEtape = parseInt(localStorage.getItem("nbEtape")) + 1;
        localStorage.setItem("nbEtape", nbEtape );
        localStorage.setItem("phase", game[this.$route.params.id].actionE );
        setTimeout(() => {
          this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionE  } })
        }, delay);
      },
      routerF() {
        let nbEtape = parseInt(localStorage.getItem("nbEtape")) + 1;
        localStorage.setItem("nbEtape", nbEtape );
        localStorage.setItem("phase", game[this.$route.params.id].actionF );
        setTimeout(() => {
          this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionF  } })
        }, delay);
      },
      routerBourrin() {
        let nbEtape = parseInt(localStorage.getItem("nbEtape")) + 1;
        localStorage.setItem("nbEtape", nbEtape );
        localStorage.setItem("phase", game[this.$route.params.id].actionBourrin );
        setTimeout(() => {
          this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionBourrin  } })
        }, delay);
      },
      routerNinja() {
        let nbEtape = parseInt(localStorage.getItem("nbEtape")) + 1;
        localStorage.setItem("nbEtape", nbEtape );
        localStorage.setItem("phase", game[this.$route.params.id].actionNinja );
        setTimeout(() => {
          this.$router.push({ name: 'game', params: { id: game[this.$route.params.id].actionNinja  } })
        }, delay);
      },
      handleFade() {
        this.fade = !this.fade;
        setTimeout(() => {
          this.fade = !this.fade;
        }, 1000);
      }
    }
};
</script>
