console.log('iygiuu')

const burger = document.getElementById('burger');
const navLink = document.getElementById('nav-links');


burger.addEventListener('click', () => {
    navLink.classList.toggle('active');
    burger.classList.toggle('toggle');  
});

// navLinks.addEventListener('click', (e) => {
//     if (e.target.tagName === 'A') {
//         navLink.classList.remove('active');
//         burger.classList.remove('toggle');
//     }
// });


// Отримуємо елементи
const textBlock = document.getElementById('textBlock');
const toggleButton = document.getElementById('toggleButton');

// Обробник кліку для кнопки
toggleButton.addEventListener('click', () => {
  // Перемикаємо клас 'open'
  textBlock.classList.toggle('open');
  
  // Змінюємо текст кнопки
  if (textBlock.classList.contains('open')) {
    toggleButton.textContent = 'Згорнути';
  } else {
    toggleButton.textContent = 'Показати більше';
  }
});


const menuToggle = document.querySelector('.menu-toggl');
const navLinks = document.querySelector('.nav-link');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


        // let currentSlide = 0;
        //  function showSlide(index) { const slides = document.querySelectorAll('.slide'); if (index >= slides.length) { currentSlide = 0; }
        //   else if (index < 0) { currentSlide = slides.length - 1; } 
        //   else { currentSlide = index; } document.querySelector('.slides').style.transform = `translateX(${-currentSlide * 100}%)`; } 
        //   function moveSlide(direction) { showSlide(currentSlide + direction); } setInterval(() => { moveSlide(1); }, 3000); // Зміна слайдів кожні 3 секунди
        //   document.getElementById('prev').addEventListener('click', () => moveSlide(-1));
        //   document.getElementById('next').addEventListener('click', () => moveSlide(1));


console.log('kuhkuulklkjuuiiuui')
