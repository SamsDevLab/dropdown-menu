import { toggleVisibility } from "./index.js";

export const displayMenu = () => {
  const dropdownButton = document.querySelector("[data-button = 'dropdown']");
  const menuButtonContainer = document.querySelector(
    "[data-container = 'menu-buttons']",
  );

  dropdownButton.addEventListener("click", (event) => {
    event.preventDefault();
    toggleVisibility(menuButtonContainer);
  });
};

displayMenu();
