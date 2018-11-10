"use strict";

(function() {
  var ESCAPE_KEY = 27;

  var cartIcons = document.querySelectorAll(".catalog__cart-link");
  var orderButton = document.querySelector(".weeks-bestseller__order-button");
  var popup = document.querySelector(".modal");
  var menuButton = document.querySelector(".page-header__button");
  var header = document.querySelector(".page-header");
  var navigation = document.querySelectorAll(".page-header__navigation");

  header.classList.remove("page-header--no-js");

  if (orderButton) {
    orderButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
    });
  }

  if (popup) {
    document.addEventListener("click", function (evt) {
      if (!popup.contains(evt.target) && evt.target !== orderButton
        && popup.classList.contains("modal-show")
        && !evt.target.classList.contains("catalog__cart-link")
        && !evt.target.classList.contains("catalog__cart-icon")) {
          popup.classList.remove("modal-show");
      }

      if (evt.target.classList.contains("catalog__cart-link") || evt.target.classList.contains("catalog__cart-icon")) {
        evt.preventDefault();
        popup.classList.add("modal-show");
      }
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === ESCAPE_KEY) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });

  menuButton.addEventListener("click", function() {
    menuButton.classList.toggle("page-header__button--close");

    [].forEach.call(navigation, function(el) {
      el.classList.toggle("page-header__navigation--opened");
    });
  });
})();
