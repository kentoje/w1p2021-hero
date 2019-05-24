<template>
  <div class="big-header">
    <h1>Character</h1>
    <br />
    <div class="buttons__character">
      <div class="button__first">
        <img ref="preload" src="../assets/img/bourin.jpg" />
        <h2 class="button__text">{{ classeBourrin }} : {{ citationBourrin }}</h2>
        <button class="button__character button" @click="setBourrin">Selection du mode bourrin</button>
      </div>
      <div class="button__second">
        <img src="../assets/img/ninja.png" />
        <h2 class="button__text">{{ classeNinja }} : {{ citationNinja }}</h2>
        <button class="button__character button" @click="setNinja">Selection du mode ninja</button>
      </div>
    </div>
  </div>
</template>

<script>
import game from "../data/personnages.json";
import personnage from '../personnage';

export default {
    
    computed: {
      nomBourrin() {
        return game[1].nom;
      },
      citationBourrin() {
        return game[1].citation;
      },
      classeBourrin() {
        return game[1].classe;
      },
      nomNinja() {
        return game[2].nom;
      },
      citationNinja() {
        return game[2].citation;
      },
      classeNinja() {
        return game[2].classe;
      }
    },
    methods: {
      setNinja() {
        personnage.set(game[2]);
        localStorage.setItem("charName", personnage.getNom() );
        localStorage.setItem("charWin", personnage.getWin() );
        localStorage.setItem("charLose", personnage.getLose() );
        localStorage.setItem("nbEtape", 0 );
        localStorage.setItem("phase", 1 );
        this.$router.push({ name: 'game', params: { id: '1' } })
      },
      setBourrin() {
        personnage.set(game[1]);
        localStorage.setItem("charName", personnage.getNom() );
        localStorage.setItem("charWin", personnage.getWin() );
        localStorage.setItem("charLose", personnage.getLose() );
        localStorage.setItem("nbEtape", 0 );
        localStorage.setItem("phase", 1 );
        this.$router.push({ name: 'game', params: { id: '1' } })
      }
    }
};
</script>
