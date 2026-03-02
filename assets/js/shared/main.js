// ===== MAIN ENTRY =====

document.addEventListener('DOMContentLoaded', () => {
  setActiveNavLink();
});

// Highlight the nav link matching the current page
function setActiveNavLink() {
  const links = document.querySelectorAll('.nav-links a');
  const current = window.location.pathname;
  links.forEach(link => {
    if (current.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
}
