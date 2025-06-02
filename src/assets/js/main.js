import Parallax from 'parallax-js';
import '@/assets/styles/main.sass';
import './layout.js';


const scene = document.getElementById('scene');
if (scene) {
  new Parallax(scene);
}