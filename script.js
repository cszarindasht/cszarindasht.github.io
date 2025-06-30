// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (hamburger && dropdownMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            dropdownMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !dropdownMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                dropdownMenu.classList.remove('active');
            }
        });

        // Close menu when clicking on menu items
        const menuItems = dropdownMenu.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                dropdownMenu.classList.remove('active');
            });
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.glass-nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.15)';
            nav.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.1)';
            nav.style.boxShadow = 'none';
        }
    }
});
