var btn = document.querySelector(".main-nav__toggle");
var btnOpen = document.querySelector(".main-nav__toggle-open");
var btnClose = document.querySelector(".main-nav__toggle-close");
var menu = document.querySelector(".site-list");
var exmplBefore = document.querySelector(".example__image--before");
var exmplAfter = document.querySelector(".example__image--after");
var btnWas = document.querySelector(".example__button--was");
var btnHasBecome = document.querySelector(".example__button--has-become");
var control = document.querySelector(".example__control");

menu.classList.remove("site-list--no-js");
btnOpen.classList.remove("visually-hidden");

btn.addEventListener("click", function () {
if (btnClose.classList.contains("visually-hidden")) {
      btnClose.classList.remove("visually-hidden");
      btnOpen.classList.add("visually-hidden");
      menu.classList.remove("site-list--close");
    } else {
      if (btnOpen.classList.contains("visually-hidden")) {
        btnOpen.classList.remove("visually-hidden");
        btnClose.classList.add("visually-hidden");
        menu.classList.add("site-list--close");
    }
  }
});

btnWas.addEventListener("click", function () {
  exmplAfter.classList.remove("example__image--visible");
  exmplAfter.classList.add("example__image--not-visible");
  exmplBefore.classList.remove("example__image--not-visible");
  exmplBefore.classList.add("example__image--visible");
  control.classList.add("example__control--left");
  control.classList.remove("example__control--right");
});

btnHasBecome.addEventListener("click", function () {
  exmplBefore.classList.remove("example__image--visible");
  exmplBefore.classList.add("example__image--not-visible");
  exmplAfter.classList.remove("example__image--not-visible");
  exmplAfter.classList.add("example__image--visible");
  control.classList.add("example__control--right");
  control.classList.remove("example__control--left");
});
