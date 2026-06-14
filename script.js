// script.js

// Mobile Menu

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");
});

// Button Alert

const learnBtn = document.getElementById("learn-btn");

learnBtn.addEventListener("click", () => {
    alert("Welcome to Responsive Frontend Development!");
});

// Form Submission

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();
});