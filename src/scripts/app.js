'use strict'
import { Swiper } from 'swiper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);



const burgerButton = document.querySelector(".burger");
const menu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__lien");
const menuItems = document.querySelectorAll('.nav__el');

function toggleMenu() {
  menu.classList.toggle("switch");
  burgerButton.classList.toggle('active');
}

function closeMenu() {
  menu.classList.remove("switch");
  burgerButton.classList.remove('active');
}

if (burgerButton) {
  burgerButton.addEventListener("click", toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

function animateMenuItems() {
  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('slide-in');
    }, index * 100);
  });
}
animateMenuItems();




window.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.nav__menu .nav__el a');

  function handleScroll() {
    const sections = document.querySelectorAll('section');
    // Remplacez 'section' par le sélecteur de vos sections
    const currentScroll = window.scrollY;

    let currentSectionId = null;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Pour ajuster le déclenchement du changement de section (optionnel)
      const sectionBottom = sectionTop + section.offsetHeight;

      if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
        currentSectionId = section.getAttribute('id');
      }
    });



    // Mettre à jour la classe 'actif' sur le lien du menu correspondant à la section active
    menuItems.forEach(item => {
      item.classList.remove('actif');
      if (item.getAttribute('href') === `#${currentSectionId}`) {
        item.classList.add('actif');
      }
    });
  }

  // Appeler la fonction handleScroll lors du défilement de la page
  window.addEventListener('scroll', handleScroll);
});






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




/*if (document.getElementById("cookiePopup")) {

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
}*/




gsap.to(".para-gauche", {

  scrollTrigger: {
    pin: ".pin",
    trigger: ".para-gauche",
    start: "-100px top",
    endTrigger: ".para-droite",
    end: "bottom 70%",
    toggleActions: "play none play none"
  },
});



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

    // Ajoute la classe .revealed une fois que l'élément est révélé
    if (reveals[i].classList.contains("act")) {
      reveals[i].classList.add("revealed");
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


// Get the bike container element
/*const bikeContainer = document.getElementById("bikeContainer");

// Function to handle the scroll event
function handleScroll() {
  // Calculate the offset based on the scroll position and adjust the bike's position
  const scrollOffset = window.scrollY;
  bikeContainer.style.left = scrollOffset + "px";
}

// Attach the scroll event listener to the window
window.addEventListener("scroll", handleScroll);*/

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour ajouter la classe "highlight" aux éléments visibles lors du scroll
function handleScrollAnimation() {
  const highlightedElements = document.querySelectorAll(".highlight-once");

  highlightedElements.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("highlight");
    }
  });
}

// Attendre que le contenu de la page soit chargé
document.addEventListener("DOMContentLoaded", function () {
  // Lancer l'animation au scroll
  window.addEventListener("scroll", handleScrollAnimation);
});





















