'use strict';



/**
 * element toggle function
 */

const toggleElem = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navTogglers.length; i++) {
  navTogglers[i].addEventListener("click", function () {
    toggleElem(navbar);
    toggleElem(overlay);
  });
}



/**
 * header sticky & back to top button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    header.classList.add("header-anim");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    header.classList.remove("header-anim");
  }
});



/**
 * search box toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    toggleElem(searchBox);
  });
}



/**
 * whishlist button toggle
 */

const whishlistBtns = document.querySelectorAll("[data-whish-btn]");

for (let i = 0; i < whishlistBtns.length; i++) {
  whishlistBtns[i].addEventListener("click", function () {
    toggleElem(this);
  });
}



$(document).on('click', '#signIn', function (event) {
  event.preventDefault();
  $('#modal').css('display', 'block');
  $('.modal-bg-signup').hide();
  $('.modal-bg-signin').fadeIn(800);
});


$(document).on('click', '#signUp', function (event) {
  event.preventDefault();
  $('#modal').css('display', 'block');
  $('.modal-bg-signin').hide();
  $('.modal-bg-signup').fadeIn(800);
});

$(document).on('click', '.popup-overlay, .modal-bg', function (e) {
  if (e.target.className == 'popup-overlay') {
      $(".popup-overlay").hide();
  }
  if (e.target.className.includes('modal-bg')) {
      $(".modal-bg").hide();
  }
})

$(document).on('click', '.numberVButton', function (e) {
  $(".popup-overlay").css("display", "flex");
});

$(document).ready(function () {
  $('#date').val(new Date().toISOString().slice(0, 10));
  $('.otpNumber').keyup(function () {
      if (this.value.length === this.maxLength) {
          $(this).next('.otpNumber').focus();
      }
  });
});