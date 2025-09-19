"use strict";

const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerPanel = document.querySelector(".hamburger-panel");

hamburgerIcon.addEventListener("click", () => {
  hamburgerPanel.classList.toggle("slide-in");
  hamburgerPanel.classList.add("transition");
});

