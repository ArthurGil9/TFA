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


function showPopup() {
  var popup = document.getElementById("cookiePopup");
  popup.style.display = "block";
}

// Attendez 3 secondes avant d'afficher le pop-up
setTimeout(showPopup, 1500);

// Récupérer les références des boutons
var acceptBtn = document.getElementById("acceptBtn");
var rejectBtn = document.getElementById("rejectBtn");

// Ajouter des écouteurs d'événements aux boutons
acceptBtn.addEventListener("click", acceptCookies);
rejectBtn.addEventListener("click", rejectCookies);

function acceptCookies() {
  document.getElementById("cookiePopup").style.display = "none";
  // Ajoutez ici votre code pour enregistrer la préférence de l'utilisateur (par exemple, en utilisant des cookies)
  console.log("Cookies acceptés !");
}

function rejectCookies() {
  document.getElementById("cookiePopup").style.display = "none";
  // Ajoutez ici votre code pour gérer le rejet des cookies
  console.log("Cookies rejetés !");
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




