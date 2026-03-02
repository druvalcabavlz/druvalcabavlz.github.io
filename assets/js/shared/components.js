// ===== SHARED COMPONENTS =====

// Inject navbar into #header
const headerEl = document.getElementById('header');
if (headerEl) {
  headerEl.innerHTML = `
    <nav class="navbar">
      <div class="container">
        <a href="/index.html" class="nav-logo">dulce.</a>
        <ul class="nav-links">
          <li><a href="/index.html">Home</a></li>
          <li><a href="/pages/about.html">About</a></li>
          <li><a href="/pages/skills.html">Skills</a></li>
          <li><a href="/pages/agents.html">Agents</a></li>
          <li><a href="/pages/contact.html">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;
}

// Inject footer into #footer
const footerEl = document.getElementById('footer');
if (footerEl) {
  footerEl.innerHTML = `
    <footer class="footer">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} Dulce. All rights reserved.</p>
        <ul class="footer-links">
          <li><a href="/pages/about.html">About</a></li>
          <li><a href="/pages/skills.html">Skills</a></li>
          <li><a href="/pages/agents.html">Agents</a></li>
          <li><a href="/pages/contact.html">Contact</a></li>
        </ul>
      </div>
    </footer>
  `;
}
