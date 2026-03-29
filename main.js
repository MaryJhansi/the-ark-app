// 1. Grab the hamburger
const hamburger = document.querySelector(".hamburger");

// 2. Grab the nav-links
const navLinks = document.querySelector(".nav-links");

// 3. Listen for click on hamburger

hamburger.addEventListener('click', function () {
    // 4. Toggle active class on navLinks
    navLinks.classList.toggle("active")
});