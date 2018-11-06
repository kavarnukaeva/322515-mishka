'use strict';

(function() {
  var ESCAPE_KEY = 27;
  // var navHeader = document.querySelector('.page-header__navigation');
  // var navToggle = document.querySelector('.page-header__button');
  var orderButton = document.querySelector(".weeks-bestseller__order-button");
  var popup = document.querySelector(".modal");

// navHeader.classList.remove('page-header__navigation--nojs');
//
// navToggle.addEventListener('click', function() {
//  if (navHeader.classList.contains('page-header__navigation--closed')) {
//    navHeader.classList.remove('page-header__navigation--closed');
//    navHeader.classList.add('page-header__navigation--opened');
//  } else {
//    navHeader.classList.add('page-header__navigation--closed');
//    navHeader.classList.remove('page-header__navigation--opened');
//  }
// });

  orderButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
  });

  document.addEventListener("click", function (evt) {
    if (evt.target !== orderButton && evt.target !== popup && evt.target.parentNode !== popup && popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === ESCAPE_KEY) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
})();
