"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const header_burger = document.querySelector(".header_burger");
  const header_menu = document.querySelector(".header_menu");
  const links = document.querySelectorAll(".links");

  header_burger.addEventListener("click", () => {
    const _link = document.querySelector("._link");

    header_burger.classList.toggle("active");
    header_menu.classList.toggle("active");
    document.body.classList.toggle("log");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.toggle("links-active");
    }
    _link.style.fontSize = "46px";
  });
});
