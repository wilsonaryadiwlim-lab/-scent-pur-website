// Smooth scrolling untuk navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Product filtering system
const filterProducts = (category) => {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
};

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission here
            alert('Terima kasih! Pesan Anda telah dikirim.');
            contactForm.reset();
        });
    }
});

// Mobile menu toggle
const setupMobileMenu = () => {
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '☰';
    menuToggle.className = 'menu-toggle';
    document.querySelector('.nav-container').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('active');
    });
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
});