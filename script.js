// togle class active hamburger menu
const navbarnav = document.querySelector('.navbar-nav');
// ketika hamburger menu diklik
document
    .querySelector('#hamburger-menu')
    .onclick = (e) => {
        navbarnav
            .classList
            .toggle('active');
        e.preventDefault();
    };

// togle class active untuk shopping cart button
const shoppingcart = document.querySelector('.shopping-cart');
const shoppingbuton = document.querySelector('#shopping-cart-button');
document
    .querySelector('#shopping-cart-button')
    .onclick = (e) => {
        shoppingcart
            .classList
            .toggle('active');
        e.preventDefault();
    }
    // togle class active untuk search form
    const searchform = document.querySelector('.search-form');
const searchbox = document.querySelector('#search-box');

document
    .querySelector('#search-button')
    .onclick = (e) => {
        searchform
            .classList
            .toggle('active');
        searchbox.focus();
        e.preventDefault();
    };

// klik diluar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const shb = document.querySelector('#shopping-cart-button');
document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav
            .classList
            .remove('active');
    };

    if (!sb.contains(e.target) && !searchbox.contains(e.target)) {
        searchform
            .classList
            .remove('active');
    }
    if(!shb.contains(e.target) && !shoppingbuton.contains(e.target)){
    shoppingcart.classList.remove('active'); }
});

// modal bok
const itemdetailmodal = document.querySelector('#item-detail-modal');
const itemdetailbutton = document.querySelectorAll('.item-detail-button');

itemdetailbutton.forEach((btn) => {
    btn.onclick = (e) => {
        itemdetailmodal.style.display ='flex';
        e.preventDefault();
    };

}) 


// klik tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemdetailmodal.style.display = 'none';
    e.preventDefault();
}

// klik diluar modal
window.onclick = (e) => {
    if (e.target === itemdetailmodal) {
        itemdetailmodal.style.display ='none';
    }
}