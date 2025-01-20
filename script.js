function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  const roles = ["Frontend Developer", "Data Analyst", "Graphic Designer"];
  let roleIndex = 0; // Current role in the array
  let charIndex = 0; // Current character in the role string
  const typingSpeed = 100; // Typing speed in ms
  const erasingSpeed = 50; // Erasing speed in ms
  const delayBetweenRoles = 2000; // Delay before switching roles
  const dynamicText = document.getElementById("dynamic-text");

  function typeRole() {
    if (charIndex < roles[roleIndex].length) {
      // Add the next character
      dynamicText.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, typingSpeed);
    } else {
      // Wait before erasing
      setTimeout(eraseRole, delayBetweenRoles);
    }
  }

  function eraseRole() {
    if (charIndex > 0) {
      // Remove the last character
      dynamicText.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseRole, erasingSpeed);
    } else {
      // Move to the next role
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, typingSpeed);
    }
  }

  // Start the typewriter effect
  document.addEventListener("DOMContentLoaded", typeRole);

  