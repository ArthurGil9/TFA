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



const smoothLinks = document.querySelectorAll('.smooth-link');

smoothLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({
    behavior: 'smooth'
  });
}




if (document.getElementById("cookiePopup")) {

  if (!getCookie("popupAccepted")) {

    function showPopup() {
      var popup = document.getElementById("cookiePopup");
      popup.style.display = "block";
    }

    setTimeout(showPopup, 1500);

    var acceptBtn = document.getElementById("acceptBtn");
    var rejectBtn = document.getElementById("rejectBtn");

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

  console.log("Cookies rejetés !");
}


function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


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





const myButton = document.getElementById('myButton');
const transitionOverlay = document.querySelector('.transition-overlay');

if (myButton && transitionOverlay) {
  myButton.addEventListener('click', function () {

    transitionOverlay.classList.add('active');

    setTimeout(function () {
      window.location.href = 'fonctionnalités.html';
    }, 750);
  });
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("act");
    } else {
      reveals[i].classList.remove("act");
    }
  }
}

window.addEventListener("scroll", reveal);





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


/*var swiper2 = new swiper2(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});*/

















