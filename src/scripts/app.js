'use strict'
import { Swiper } from 'swiper';


const menuBurger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');

menuBurger.addEventListener('click', function(){
    menu.classList.toggle("menu--open");
   
}
);

function solutionA(){
    let sClass="menu--open",
           oNavbar = document.getElementById("ancre");
     if (oNavbar.classList.contains(sClass) == true) {
       oNavbar.classList.remove(sClass); // Cache le menu
     } else {
       oNavbar.classList.add(sClass);// Affiche le menu
     }
 }
 document.addEventListener('DOMContentLoaded',function(){
   document.getElementById("ancre").addEventListener("click",solutionA); 
 });

 
const swiper = new Swiper('.swiper-container');








