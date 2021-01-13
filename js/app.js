const aside = document.querySelector(".aside");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const clearCart = document.querySelector(".clear-cart");

function init(){
    closeBtn.addEventListener("click", closeCart);
    sidebarToggle.addEventListener("click", toggleCart);
}

function toggleCart() {
    aside.classList.toggle("show-sidebar");
}

function closeCart() {
    aside.classList.remove("show-sidebar");
}

document.addEventListener("DOMContentLoaded", init);