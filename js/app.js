'use strict';

const shoppingCart = document.getElementById('shopping-cart');
const aside = document.querySelector('.aside');

const closeBtn = document.querySelector('.close-btn');

let toggleCart = function(){
    aside.classList.toggle('show-sidebar');
};

shoppingCart.addEventListener('click', toggleCart);

closeBtn.addEventListener('click', function(){
    aside.classList.remove('show-sidebar');
})