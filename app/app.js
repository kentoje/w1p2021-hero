import './assets/scss/styles.scss';
import Vue from 'vue';
import router from './router';

new Vue({ router: router }).$mount('#root');

let fondMusic = document.getElementById('fondMusic');
// let clickSound = document.getElementById('clickSound');
let soundControl = document.getElementById('soundControl');
let mute = false;
// let button = document.querySelectorAll('button');
// button.forEach(element => {
//   element.classList.add('coucou');
//   element.addEventListener('click',function(event){
//     console.log('cliock');
//     clickSound.play();
//   })
// });
soundControl.addEventListener('click', function(){
  if(mute == false){
    soundControl.className = "fas fa-volume-mute"
    mute = true;
    fondMusic.pause();
  } else {
    soundControl.className = "fas fa-volume-up"
    mute = false;
    fondMusic.play();
  }

});
fondMusic.play();
fondMusic.volume = 0.3;
// clickSound.volume = 0.1;


