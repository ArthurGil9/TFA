'use strict'
import Swiper from 'swiper';
const swiper = new Swiper('.swiper-container');



const menuBurger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');
if(menuBurger){
menuBurger.addEventListener('click', function(){
    menu.classList.toggle("menu--open");
}
)}


