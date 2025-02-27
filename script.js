// togle class active
const navbarnav = document.querySelector('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active');
};

// klik dilur sidebar
const hamburgermenu =document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburgermenu.contains(e.target) && !navbarnav.contains(e.target)){
        navbarnav.classList.remove('active');
    };
});