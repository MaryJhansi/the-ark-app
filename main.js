// 1. Grab the hamburger
const hamburger = document.querySelector(".hamburger");

// 2. Grab the nav-links
const navLinks = document.querySelector(".nav-links");

// 3. Listen for click on hamburger

hamburger.addEventListener('click', function () {
    // 4. Toggle active class on navLinks
    navLinks.classList.toggle("active")
});

// Add to Cart — shows a toast notification
function addToCart(button) {
    const productName = button.closest('.product-card').querySelector('h3').textContent;
    showToast('“' + productName + '” added to cart!');
}

function showToast(message) {
    const existing = document.querySelector('.cart-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// Newsletter form — show success message on submit
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        document.getElementById('newsletterSuccess').classList.add('visible');
        this.reset();
    });
}