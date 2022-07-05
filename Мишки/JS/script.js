var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-container");
var closeButton = document.querySelector(".card-product__add");
var openButton = document.querySelector(".button-order");

closeButton.addEventListener("click", function () {
	modal.classList.toggle("closed");
	modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function () {
	modal.classList.toggle("closed");
	modalOverlay.classList.toggle("closed");
});



const burger = document.querySelector(".burger");
var NavMenu = document.querySelector('.site-list');
var NavMenuO = document.querySelector('.user-list');
burger.addEventListener("click", () => {
	NavMenu.classList.toggle('nav-open');
	NavMenuO.classList.toggle('nav-open');
});

const BurgerClosed = document.querySelector('.main-nav--closed');
var mainNav = document.querySelector('.main-nav');
burger.addEventListener("click", () => {
	mainNav.classList.toggle('main-nav--opened');
	mainNav.classList.toggle('main-nav--closed');
});

var BoxSize = document.querySelector('.product-size');
BoxSize.addEventListener('click', () => {
	BoxSize.classList.toggle('checked-size');
});

