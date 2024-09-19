// script.js

// Navigation Toggle
// Highlight the active section in the navbar
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Navigation Toggle for Mobile
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        document.querySelector('nav').classList.toggle('active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
};

navSlide();


// Typing Effect in Hero Section
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Software Engineer', 'Web Developer', 'Problem Solver'];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// script.js

// Existing code...

// Modal Functionality
document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');
    const modalContainer = document.getElementById('modal-container');

    readMoreButtons.forEach((button) => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            const modal = document.getElementById(projectId);
            modal.style.display = 'block';
            modalContainer.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Disable background scrolling
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', function () {
            modals.forEach((modal) => (modal.style.display = 'none'));
            modalContainer.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable background scrolling
        });
    });

    // Close modal when clicking outside of modal content
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            modals.forEach((modal) => (modal.style.display = 'none'));
            modalContainer.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Add 'visible' class to timeline items as they enter the viewport
function handleScroll() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check to show items already in view on page load
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function () {
        navLinks.classList.toggle('nav-active'); // Toggle visibility and position
        burger.classList.toggle('toggle'); // Toggle burger animation
    });
});

