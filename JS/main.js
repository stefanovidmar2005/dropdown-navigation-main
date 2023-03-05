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
// Event Delegation on ul to find the target element that the li was clicked on
// TODO: come up with a matching startegy we can use closest and classlists
navigationList.addEventListener("click", function (e) {
  const target = e.target.closest(".dropdown__list");
  if (!target) return;
  // converting the html collection into an array so we can use the filter method
  const children = [...target.children];
  const icon = target.querySelector(".nav__links-flex").children[1];
  // filtering out the children that only have the classlist of dropdown so we can select only the current dropdown upon each click so essentially this will be dynamic for other dropdown menus in future
  const dropdown = children.filter((child) => {
    return child.classList.contains("dropdown");
  });
  if (dropdown[0].classList.contains("dropdown-hidden")) {
    dropdown[0].classList.remove("dropdown-hidden");
    // changing the icon src dynamically upon the closest in the nav__links-flex container
    icon.src = "images/icon-arrow-up.svg";
  } else {
    dropdown[0].classList.add("dropdown-hidden");
    icon.src = "images/icon-arrow-down.svg";
    // edge case that the user may have had the dropdown open and then closed the menu therefore if he clicked again it woild be already open so to avoid this we will reset the dropdown when the user clicks on closing the menu
  }
});
