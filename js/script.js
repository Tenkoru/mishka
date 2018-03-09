'use strict';
var mainContent = document.querySelector(".main-content");
var mainNavContainer = document.querySelector(".main-nav");
var modalCart = document.querySelector(".modal-cart");
var modalOverlay = document.querySelector(".overlay-modal");
var mainNavBtn = mainNavContainer.querySelector(".page-header__menu-btn");
var mainNavMenu = mainNavContainer.querySelector(".main-nav__list");
var weeklyGoodsButton = mainContent.querySelector(".weekly-goods__button");

(function() {
  mainNavBtn.addEventListener("click", function(event) {
    if (this.classList.contains("page-header__menu-btn--active")) {
      this.classList.remove("page-header__menu-btn--active");
      mainNavMenu.classList.remove("main-nav__list--opened");
      mainContent.removeEventListener("click", mainNavCloser);
    } else {
      this.classList.add("page-header__menu-btn--active");
      mainNavMenu.classList.add("main-nav__list--opened");
      mainContent.addEventListener("click", mainNavCloser);
    }
  });
}());

function mainNavCloser(event) {
  if (!event.currentTarget.classList.contains("main-nav__list")) {
    mainNavBtn.classList.remove("page-header__menu-btn--active");
    mainNavMenu.classList.remove("main-nav__list--opened");
    mainContent.removeEventListener("click", mainNavCloser);
  }
};

function modalCartHandler(button) {
  button.addEventListener("click", function(event) {
    modalOverlay.classList.add("overlay-modal--opened");
    modalCart.classList.add("modal-cart--opened");
    modalOverlay.addEventListener("click", modalOverlayHandler);
  })
};

function modalOverlayHandler(event) {
  if (!event.currentTarget.classList.contains("modal-cart")) {
    modalOverlay.classList.remove("overlay-modal--opened");
    modalCart.classList.remove("modal-cart--opened");
    modalOverlay.removeEventListener("click", modalOverlayHandler);
  }
}

if (weeklyGoodsButton) {
  modalCartHandler(weeklyGoodsButton);
};
