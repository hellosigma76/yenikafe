// Acıktım Café - JavaScript functionality

// Mobile menu state
let isMobileMenuOpen = false;

// Scroll effect for header
function handleScroll() {
    const header = document.getElementById('header');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Close mobile menu if open
        if (isMobileMenuOpen) {
            toggleMobileMenu();
        }
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const hamburger = document.querySelector('.hamburger');
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        mobileNav.classList.add('open');
        hamburger.style.transform = 'rotate(45deg)';
        hamburger.style.background = 'transparent';
    } else {
        mobileNav.classList.remove('open');
        hamburger.style.transform = 'rotate(0deg)';
        hamburger.style.background = 'var(--foreground)';
    }
}

// Initialize animations on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.2s';
                entry.target.style.animationFillMode = 'forwards';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-scale-in');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Update current year in footer
function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Update current year
    updateCurrentYear();
    
    // Add click handlers for hamburger animation
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
        });
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu on desktop
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
        toggleMobileMenu();
    }
});

// Smooth scrolling for all internal links
document.addEventListener('click', function(e) {
    if (e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
    }
});

// Add entrance animations with staggered delays
function addStaggeredAnimations() {
    const cards = document.querySelectorAll('.about-card, .gallery-item, .contact-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Call staggered animations when page loads
window.addEventListener('load', addStaggeredAnimations);