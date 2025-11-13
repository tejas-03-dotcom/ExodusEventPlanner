// HERO SLIDESHOW
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
slides[currentSlide].classList.remove('active');
currentSlide = (currentSlide + 1) % slides.length;
slides[currentSlide].classList.add('active');
}

// Start slideshow only if there are multiple slides
if (slides.length > 1) {
setInterval(showNextSlide, 5000);
}

// FADE-IN SCROLL EFFECT
const fadeSections = document.querySelectorAll('section');

function onScroll() {
fadeSections.forEach(sec => {
const rect = sec.getBoundingClientRect();
if (rect.top < window.innerHeight - 100) {
sec.classList.add('visible');
}
});
}

// NAVBAR FUNCTIONALITY
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
hamburger.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
hamburger.classList.remove("active");
});
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
if (window.scrollY > 100) {
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}

// Also trigger fade-in effect on scroll
onScroll();
});

// EmailJS form
document.getElementById("contact-form").addEventListener("submit", function (e) {
e.preventDefault();
emailjs.sendForm("service_q4xw0cob", "template_bmvln2p", this).then(
function () {
document.getElementById("status-message").innerText = "✅ Message sent successfully!";
document.getElementById("status-message").style.color = "green";
document.getElementById("status-message").style.background = "#e8f5e8";
document.getElementById("contact-form").reset();
},
function (error) {
document.getElementById("status-message").innerText = "❌ Failed to send. Please try again later.";
document.getElementById("status-message").style.color = "red";
document.getElementById("status-message").style.background = "#ffe8e8";
}
);
});

// Initialize scroll effects on page load
document.addEventListener('DOMContentLoaded', function() {
onScroll(); // Check visible sections on load
});

