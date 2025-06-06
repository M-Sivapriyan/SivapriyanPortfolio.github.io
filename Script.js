// Function to handle navigation link clicks and show corresponding section
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll("section").forEach(section => {
    section.style.display = "none";
  });

  // Show the selected section if exists
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = "block";
  }

  // Update active nav link styling
  document.querySelectorAll("nav a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
  });
}

// Add event listeners for navigation links
document.getElementById("about-link").addEventListener("click", e => {
  e.preventDefault();
  showSection("about");
});

document.getElementById("skills-link").addEventListener("click", e => {
  e.preventDefault();
  showSection("skills");
});

document.getElementById("exp-link").addEventListener("click", e => {
  e.preventDefault();
  showSection("exp");
});

document.getElementById("projects-link").addEventListener("click", e => {
  e.preventDefault();
  showSection("projects");
});

document.getElementById("contact-link").addEventListener("click", e => {
  e.preventDefault();
  showSection("contact");
});

// Initially display "About Me" section on page load
showSection("about");
