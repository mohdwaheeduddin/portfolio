const menuBtn = document.getElementById('menu-icon');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const contactForm = document.getElementById('contact-form');
const thankYouMessage = document.getElementById('thank-you-message');

// Toggle sidebar functionality
menuBtn?.addEventListener('click', () => {
    sidebar.style.width = '250px';
});

closeBtn.addEventListener('click', () => {
    sidebar.style.width = '0';
});

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        thankYouMessage.style.display = 'block'; // Show thank you message
        contactForm.reset(); // Reset the form
    });
}
