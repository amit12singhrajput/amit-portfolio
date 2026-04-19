// Current Year for Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Navigation Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-link');
const navbar = document.getElementById('navbar');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile nav when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typewriter Effect for Hero Subtitle
const phrases = [
    "Microservices Architect",
    "Cloud-Native Developer",
    "Spring Boot Expert"
];
let i = 0;
let j = 0;
let isDeleting = false;
let currentPhrase = "";

function typeWriter() {
    currentPhrase = phrases[j].substring(0, i);
    document.getElementById('typewriter').innerHTML = currentPhrase;

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && i === phrases[j].length) {
        typeSpeed = 2000; // Pause at the end of the phrase
        isDeleting = true;
    } else if (isDeleting && i === 0) {
        isDeleting = false;
        j = (j + 1) % phrases.length;
        typeSpeed = 500; // Pause before typing next phrase
    }

    if (isDeleting) {
        i--;
    } else {
        i++;
    }

    setTimeout(typeWriter, typeSpeed);
}

// Start typewriter effect after a short delay
setTimeout(typeWriter, 1000);

// Scroll Reveal Animations
function reveal() {
    const reveals = document.querySelectorAll('.reveal-up');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
// Trigger reveal once on load
reveal();

// Mouse tracking for background orbs (Parallax subtle effect)
document.addEventListener('mousemove', (e) => {
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    orb1.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
    orb2.style.transform = `translate(${x * -50}px, ${y * -50}px)`;
});
