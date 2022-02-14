/* Start Header */

let menuBtn = document.querySelector(".borger-btn");
let menuClose = document.querySelector(".borger-close");
let menu = document.querySelector(".mobile-menu");
let layer = document.querySelector(".layer");

menuBtn.addEventListener("click", function() {
    menu.classList.add("menu-acitve");
    layer.classList.add("layer-acitve");
});

menuClose.addEventListener("click", function () {
    menu.classList.remove("menu-acitve");
    layer.classList.remove("layer-acitve");
})

layer.addEventListener("click", function () {
    menu.classList.remove("menu-acitve");
    layer.classList.remove("layer-acitve");
})

let cartBtn = document.querySelector(".cart")
let cartPage = document.querySelector(".cart-page")

cartBtn.addEventListener("click", function () {
    cartPage.classList.toggle("cart-active")
})

/* End Header */
/* Start Imgs Switch */

let imgs = document.querySelectorAll(".thumb img")
let thumbs = document.querySelectorAll(".thumb")
let mainImg = document.querySelector(".main-img img")
let thumbRe = /\/\w+\/\w+-\w+-\d/ig

thumbs.forEach(function(e) {
    e.addEventListener("click", function() {
        mainImg.src = `${(e.children[0].src.match(thumbRe))}.jpg`;
        thumbs.forEach(function(e) {
            e.classList.remove("thumb-active");
        })
        e.classList.add("thumb-active");
    })
})

let leftArrow = document.querySelector(".main-img .left")
let rightArrow = document.querySelector(".main-img .right")
let numberSrc = 1;

rightArrow.addEventListener("click", function () {
    if (numberSrc < 4) {
        numberSrc = numberSrc +1;
        mainImg.src = `images/image-product-${numberSrc}.jpg`
    }
})

leftArrow.addEventListener("click", function () {
    if (numberSrc !== 1) {
        numberSrc = numberSrc -1;
        mainImg.src = `images/image-product-${numberSrc}.jpg`
    }
})

/* End Imgs Switch */
/* Start Add Nums */
let num = document.querySelector(".num")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")

plus.addEventListener("click", function () {
    num.innerHTML = +num.innerHTML + 1;
})
minus.addEventListener("click", function () {
    if (num.innerHTML !== "0") {
        num.innerHTML = +num.innerHTML - 1;
    }
})

/* End Add Nums */
/* Start Add Contnet */

let addToCart = document.querySelector("#addToCart")
let cartContent = document.querySelector(".cart-content")
let notiCart = document.querySelector(".noti-prod")

addToCart.addEventListener("click", function () {
    if (num.innerHTML !== "0" && cartContent.children.length < 3) {
        let prod = document.createElement("div");
        prod.className = "prod";
        let thumb = document.createElement("div");
        thumb.className = "prod-thumb";
        let prodImg = document.createElement("img");
        prodImg.src = "images/image-product-1-thumbnail.jpg";
        let prodText = document.createElement("div");
        prodText.className = "prod-text";

        let prodTitle = document.createElement("p");
        prodTitle.className = "prod-title";
        prodTitle.appendChild(document.createTextNode(document.querySelector(".right .text h1").innerHTML));

        let prodPrice = document.createElement("p");
        prodPrice.className = "prod-price";
        prodPrice.appendChild(document.createTextNode(`$125.00 x 3 $${+num.innerHTML*125}`));

        let prodRemove = document.createElement("span");
        prodRemove.className = "prod-remove";
        let trashIcon = document.createElement("i");
        trashIcon.className = "fa-solid fa-trash-can";
        prodRemove.appendChild(trashIcon)
        
        prodText.appendChild(prodPrice);
        prodText.prepend(prodTitle);
        prod.prepend(prodText);
        thumb.prepend(prodImg);
        prod.appendChild(prodRemove)
        prod.prepend(thumb);
        
        cartContent.prepend(prod)

        notiCart.style.display = "flex";
        notiCart.innerHTML = +num.innerHTML;
        document.querySelector(".cart-page .cart-content > p").style.display = "none";
        document.querySelector(".cart-page .cart-content .checkout").style.display = "block";
    }
})

window.addEventListener("click", function (e) {
    if (e.target.parentElement.className === "prod-remove") {
        e.target.parentElement.parentElement.remove()
        if (cartContent.children.length < 3) {
            document.querySelector(".cart-page .cart-content > p").style.display = "inline";
            document.querySelector(".cart-page .cart-content .checkout").style.display = "none";
            notiCart.style.display = "none";
        }
    }
})
/* End Add Contnet */