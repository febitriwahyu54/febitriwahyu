// togle class active hamburger menu
const navbarnav = document.querySelector('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active');
};

// togle class active untuk search form
const searchform = document.querySelector('.search-form');
const searchbox = document.querySelector('.#search-box');

document.querySelector('#search-button').onclick = () => {
    searchform.classList.toggle('active');
    searchbox.focus();
}

// klik diluar sidebar
const hamburgermenu =document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburgermenu.contains(e.target) && !navbarnav.contains(e.target)){
        navbarnav.classList.remove('active');
    };
});