// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing effect for introduction
const typedOptions = {
    strings: ["a Data Scientist.", "a Frontend Developer.", "an Innovator."],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
};

const typed = new Typed('#element', typedOptions);

// Fade-in animation on scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(element => {
    observer.observe(element);
});

// Add fade-in class to sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.classList.add('fade-in');
});
