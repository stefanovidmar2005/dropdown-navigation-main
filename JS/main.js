"use strict";

// Selections
const hamburger = document.querySelector(".hamburger");
const navigationList = document.querySelector(".navigation__main-list");
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navigation");

// Hamburget Functionality
hamburger.addEventListener("click", function (e) {
  let target = e.currentTarget;
  let oldSrc = "images/icon-menu.svg";
  let newSrc = "images/icon-close-menu.svg";
  if (target.getAttribute("src") !== newSrc) {
    target.src = newSrc;
    document.body.classList.add("overlay");
    navbar.classList.remove("hidden");
  } else {
    target.src = oldSrc;
    document.body.classList.remove("overlay");
    navbar.classList.add("hidden");
    // edge case that the user leaves the dropdown menu open and closes the menu
    document
      .querySelectorAll(".dropdown")
      .forEach((list) => list.classList.add("dropdown-hidden"));
  }
  document
    .querySelectorAll(".menu-icon")
    .forEach((icon) => (icon.src = "images/icon-arrow-down.svg"));
});

// Event Delegation
navigationList.addEventListener("click", function (e) {
  const target = e.target.closest(".dropdown__list");
  if (!target) return;
  const children = [...target.children];
  const icon = target.querySelector(".nav__links-flex").children[1];
  const dropdown = children.filter((child) => {
    return child.classList.contains("dropdown");
  });
  if (dropdown[0].classList.contains("dropdown-hidden")) {
    dropdown[0].classList.remove("dropdown-hidden");
    icon.src = "images/icon-arrow-up.svg";
  } else {
    dropdown[0].classList.add("dropdown-hidden");
    icon.src = "images/icon-arrow-down.svg";
  }
});
