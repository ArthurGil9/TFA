'use strict'
import { Swiper } from 'swiper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);



const burgerButton = document.querySelector(".burger");
const menu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__lien");
const menuItems = document.querySelectorAll('.nav__menu-item');

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
  const menuItems = document.querySelectorAll('.nav__menu .nav__menu-item a');

  function handleScroll() {
    const sections = document.querySelectorAll('section');
    const currentScroll = window.scrollY;

    let currentSectionId = null;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
        currentSectionId = section.getAttribute('id');
      }
    });

    menuItems.forEach(item => {
      item.classList.remove('nav__lien--active');
      if (item.getAttribute('href') === `#${currentSectionId}`) {
        item.classList.add('nav__lien--active');
      }
    });
  }

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


gsap.to(".grid-besoin__para-gauche", {

  scrollTrigger: {
    pin: ".pin",
    trigger: ".grid-besoin__para-gauche",
    start: "-100px top",
    endTrigger: ".grid-besoin__para-droite",
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



function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimation() {
  const highlightedElements = document.querySelectorAll(".highlight-once");

  highlightedElements.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("highlight");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", handleScrollAnimation);
});





















