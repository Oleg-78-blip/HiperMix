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
  console.log('hhhhhhhh')
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav:true,
    loop:true
  });
});

console.log('hellodthet')