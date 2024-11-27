 console.log('hellodthet')
 
//  function loadAside() {
//       fetch('aside.html')
//         .then(response => response.text())
//         .then(data => {
//           document.getElementById('aside-container').innerHTML = data;
//         });
//     }

//     window.onload = loadAside;

// let btn = document.querySelector('.btn');
// let navMenuHiden = document.querySelector('.nav-menu');

// btn.addEventListener('click', clickBtn);

// function clickBtn() {
//   btn.classList.toggle('active');
//   navMenuHiden.classList.toggle('active');
// }

console.log("Скрипт підключено!")



const burger = document.getElementById('burger');
const navLink = document.getElementById('nav-links');


burger.addEventListener('click', () => {
    navLink.classList.toggle('active');
    burger.classList.toggle('toggle');  
});

navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLink.classList.remove('active');
        burger.classList.remove('toggle');
    }
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav:true,
    loop:true
  });
});

console.log('hellodthet')

// // Отримати всі посилання навігації
const navLinks = document.querySelectorAll('.nav-link');

// Поточний URL
const currentUrl = window.location.pathname;

// Додати клас "active" до відповідного посилання
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentUrl) {
    link.classList.add('active');
  }
});

// slider>>>>>>>>
