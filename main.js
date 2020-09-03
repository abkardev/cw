const bars = document.querySelector('.bars');
const navMenu = document.querySelector('.nav-menu');
const links = document.querySelector('.nav-link');


bars.addEventListener('click', function(show) {
    navMenu.classList.toggle('active');



    bars.classList.toggle('show');

});