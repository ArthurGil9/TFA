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

if (document.getElementById("cookiePopup")) {
  // Vérifier si le pop-up a déjà été accepté
  if (!getCookie("popupAccepted")) {
    // Fonction pour afficher le pop-up
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
  }
}

function acceptCookies() {
  document.getElementById("cookiePopup").style.display = "none";
  setCookie("popupAccepted", true, 365);
  console.log("Cookies acceptés !");
}

function rejectCookies() {
  document.getElementById("cookiePopup").style.display = "none";
  // Ajoutez ici votre code pour gérer le rejet des cookies
  console.log("Cookies rejetés !");
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Fonction pour obtenir la valeur d'un cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
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

gsap.to(".velo-vert", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: "header", // Élément déclencheur de l'animation (dans cet exemple, le header)
    start: "bottom top", // Point de départ de l'animation (bas de l'élément déclencheur)
    end: "footer", // Point de fin de l'animation (dans cet exemple, le footer)
    scrub: true,
  },
});


const myButton = document.getElementById('myButton');
const transitionOverlay = document.querySelector('.transition-overlay');

if (myButton && transitionOverlay) {
  myButton.addEventListener('click', function () {

    transitionOverlay.classList.add('active');

    // Rediriger vers la nouvelle page après une courte pause
    setTimeout(function () {
      window.location.href = 'fonctionnalités.html';
    }, 750);
  });
}



const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  breakpoints: {
    600: {
      slidesPerView: 2,

    },
    1024: {
      slidesPerView: 3,
    }
  },

});













