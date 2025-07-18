export const displayMenu = () => {
  const dropdownButton = document.querySelector("[data-button = 'dropdown']");
  const menuButtonContainer = document.querySelector(
    "[data-container='menu-button']",
  );

  dropdownButton.addEventListener("click", (event) => {
    event.preventDefault();
    menuButtonContainer.show();
  });

  menuButtonContainer.addEventListener("blur", (event) => {
    event.preventDefault();
    menuButtonContainer.close();
  });
};

displayMenu();
