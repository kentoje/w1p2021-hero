import './assets/scss/styles.scss';
import Vue from 'vue';
import router from './router';

let fondMusic = document.getElementById('fondMusic');
fondMusic.play();
fondMusic.volume = 0.05;

new Vue({ router: router }).$mount('#root');


