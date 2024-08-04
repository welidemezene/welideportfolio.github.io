// External JavaScript file (scripts.js)

document.addEventListener("DOMContentLoaded", () => {
  const navbarBurger = document.getElementById("navbarBurger");
  const navbarMenu = document.getElementById("navbarMenu");

  navbarBurger.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".element");
  const texts = element.getAttribute("data-elements").split(",");
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < texts[textIndex].length) {
      element.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Adjust speed here
    } else {
      setTimeout(erase, 2000); // Delay before erasing
    }
  }

  function erase() {
    if (charIndex > 0) {
      element.textContent = element.textContent.slice(0, -1);
      charIndex--;
      setTimeout(erase, 50); // Adjust erase speed here
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500); // Delay before typing the next text
    }
  }

  // Initial call to start the typing effect
  type();
});

document.addEventListener("DOMContentLoaded", () => {
  const progresses = document.querySelectorAll(".progress");

  progresses.forEach((progress) => {
    const percentage = progress.getAttribute("data-percentage");
    progress.style.width = percentage + "%";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const forgotPasswordLink = document.getElementById("forgotPassword");
  const yearSpan = document.getElementById("year");

  // Set the current year in the footer
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  // Handle form submission
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic validation
    if (email === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }

    // Simulate successful login
    alert("Login successful!");
  });

  // Handle forgot password link click
  forgotPasswordLink.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Redirecting to password recovery page...");
    // You can replace this with an actual redirect or password recovery logic
  });

  // Example: Log footer link clicks
  document.querySelectorAll(".footer-links a").forEach((link) => {
    link.addEventListener("click", function (event) {
      console.log(`Clicked on: ${event.target.alt}`);
    });
  });
});
