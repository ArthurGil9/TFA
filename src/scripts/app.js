'use strict'
import { Swiper } from 'swiper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);



var BurgOpenElement = document.querySelector(".burger__close");

var BurgElement = document.querySelector(".burger__lines");

var BurgNav = document.querySelector(".nav__menu");

BurgElement.addEventListener("click", Menuburger);

BurgNav.addEventListener("click", Menuburger);




function Menuburger() {

  BurgOpenElement.classList.toggle("burger__close");

  BurgElement.classList.toggle("burger__lines__croix");

}

gsap.to(".para-gauche", {

  scrollTrigger: {
    pin: ".pin",
    trigger: ".para-gauche",
    start: "-25px top",
    endTrigger: ".para-droite",
    end: "bottom 60%",
    toggleActions: "play none play none"
  },
});




const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,

  breakpoints: {

    600: {
      slidesPerView: 2,

    },

    1024: {
      slidesPerView: 3,
    }
  }
});










