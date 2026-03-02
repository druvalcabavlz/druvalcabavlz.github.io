// ===== CONTACT PAGE =====

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) return;

    // Replace with real API call or email service integration
    console.log('Form submitted:', { name, email, message });
    alert(`Thanks, ${name}! Your message has been sent.`);
    form.reset();
  });
}
