'use strict';
window.onload = function () {
	let header = document.querySelector('.header');
	function displayHeadScrolled() {
		if (window.pageYOffset > 50) {
			header.classList.add("header-fixed");
		} else {
			header.classList.remove("header-fixed");
		}

	}
	//elem.classList.toggle("class")
	window.addEventListener('scroll', displayHeadScrolled);
}


let burgerButton = document.querySelector(".menu-header__icon");
let menuUl = document.querySelector(".menu-header__ul");

burgerButton.addEventListener("click", function (event) {
	burgerButton.classList.toggle("menu-header__icon-active");
	menuUl.classList.toggle("menu-header__ul-active");
});

