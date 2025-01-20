// Function to toggle the hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Typewriter effect for dynamic text
const roles = ["Web App Developer", "Data Analyst", "Graphic Designer"];
let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenRoles = 2000;
const dynamicText = document.getElementById("dynamic-text");

function typeRole() {
  if (dynamicText) {
    if (charIndex < roles[roleIndex].length) {
      dynamicText.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, typingSpeed);
    } else {
      setTimeout(eraseRole, delayBetweenRoles);
    }
  }
}

function eraseRole() {
  if (dynamicText) {
    if (charIndex > 0) {
      dynamicText.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseRole, erasingSpeed);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeRole);

// Modal functionality
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "flex";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

// Ensure all modals are hidden on page load
document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.style.display = "none";
  });
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
