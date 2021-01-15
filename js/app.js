const aside = document.querySelector(".aside");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const clearCart = document.querySelector(".clear-cart");
const single = document.querySelector(".single");
const goBack = document.querySelector('.go-back');

function toggleCart() {
    if(single.classList.contains('show-single')){
        single.classList.remove('show-single');
    }
    aside.classList.toggle("show");
}

function closeCart() {
    aside.classList.remove("show");
}

function createProduct(data){
    return `
    <div class="col-xl-3 col-lg-4 col-sm-6">
        <div class="product text-center">
            <div class="position-relative mb-3">
                <a class="d-block product-detail" href="#">
                    <img class="img-fluid w-100 product-img" src="${data.image}" alt="${data.name}">
                </a>
                <div class="product-overlay">
                    <ul class="mb-0 list-inline">
                        <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-outline-dark" href="#"><i class="far fa-heart"></i></a></li>
                        <li class="list-inline-item m-0 p-0"><a class="btn btn-sm btn-dark add-to-cart">Add to cart</a></li>
                        <li class="list-inline-item mr-0"><a class="btn btn-sm btn-outline-dark product-detail"><i class="fas fa-expand"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <h6> <a class="reset-anchor product-name" href="#">${data.name}</a></h6>
            <p class="text-small text-muted">$<span class="product-price">${data.price}</span></p>
        </div>
    </div>
    `;
}
        
function makeShowcase(products) {
    let result = '';
    products.forEach(item => {
        result+=createProduct(item);
    });
    document.querySelector('.showcase').innerHTML = result;
}

function renderShowcase(){
    let addToCarts = document.querySelectorAll('.add-to-cart');
    // product-detail
    let productDetails = document.querySelectorAll('.product-detail');
    
    goBack.addEventListener('click', function(){
        single.classList.remove("show-single");
    })
    
    productDetails.forEach(function(element) {
        element.addEventListener("click", function(e){
    
            let parent = e.target.closest(".product")
    
            // description__content--about
            let price = parent.querySelector('.product-price').innerText;
            let name = parent.querySelector('.product-name').innerText;
            let about = `
            <h1>${name}</h1>
                <h2>$${price}</h2>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur hic minus nihil obcaecati, ratione repellendus saepe sint tenetur totam ullam. Accusantium aspernatur ducimus impedit perferendis quisquam repellendus similique ullam vitae!</div>
            `;
            let contentAbout = document.querySelector('.description__content--about');
            contentAbout.innerHTML = about;
    
            // product__img
            let image = parent.querySelector('.product-img').getAttribute('src');
            document.querySelector('.product__img').innerHTML = `<img src="${image}" alt="">`;
            single.classList.add("show-single");
        });
    });
    
}

document.addEventListener("DOMContentLoaded", function(){
    closeBtn.addEventListener("click", closeCart);
    sidebarToggle.addEventListener("click", toggleCart);

    makeShowcase(products);
    renderShowcase();
});
