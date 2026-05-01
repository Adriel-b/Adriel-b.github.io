const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const passwordFeedback = document.getElementById("password-feedback");
const portfolioContent = document.getElementById("portfolio-content");

let portfolioUnlocked = false;
const PORTFOLIO_PASSWORD = "123";

function activateTab(targetId) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.target === targetId;
    button.classList.toggle("active", isActive);
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === targetId);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateTab(button.dataset.target);
  });
});

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const attemptedPassword = passwordInput.value.trim();

  if (attemptedPassword === PORTFOLIO_PASSWORD) {
    portfolioUnlocked = true;
    passwordFeedback.textContent = "";
    portfolioContent.classList.remove("hidden");
    passwordForm.classList.add("hidden");
    passwordInput.value = "";
  } else {
    passwordFeedback.textContent = "Incorrect password. Try again.";
  }
});

activateTab("landing");
