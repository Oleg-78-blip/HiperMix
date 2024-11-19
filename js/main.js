 function loadAside() {
      fetch('aside.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('aside-container').innerHTML = data;
        });
    }

    window.onload = loadAside;

let btn = document.querySelector('.btn');
let img = document.querySelector('.nav-menu');

btn.addEventListener('click', clickBtn);

function clickBtn() {
  btn.classList.toggle('active');
  img.classList.toggle('active');
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav:true,
    loop:true
  });
});

console.log('hellodthet')

// Отримати всі посилання навігації
const navLinks = document.querySelectorAll('.nav-link');

// Поточний URL
const currentUrl = window.location.pathname;

// Додати клас "active" до відповідного посилання
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentUrl) {
    link.classList.add('active');
  }
});

 let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function moveSlide(direction) {
      currentIndex += direction;
      if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
      } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
      }
      slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    }