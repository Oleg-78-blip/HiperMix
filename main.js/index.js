console.log('iygiuu')

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



