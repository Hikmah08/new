document.addEventListener("DOMContentLoaded", () => {
    
// Toggle icon and navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
document.addEventListener("DOMContentLoaded", () => {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    };
});
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

// Select sections and navigation links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

// Scroll event listener to update active links
window.addEventListener("scroll", () => {
    const top = window.scrollY;

    sections.forEach((section) => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            // Find the corresponding navigation link and add the "active" class
            const matchingNavLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (matchingNavLink) {
                matchingNavLink.classList.add("active"); }
            }
        });
    
        // Toggle sticky header
        const header = document.querySelector("header");
        header.classList.toggle("sticky", top > 100);
    
        // Remove toggle icon and navbar when clicking a navbar link (scroll)
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    });
    
    // Scroll reveal configuration
    const scrollRevealConfig = {
        /*
        reset: true,*/
        distance: "80px",
        duration: 2000,
        delay: 200,
    };
    
    // Initialize ScrollReveal
    ScrollReveal(scrollRevealConfig);
    
    // Apply ScrollReveal to specified elements
    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form " ,{ origin: "bottom" });
    ScrollReveal().reveal(".home-content h1, .about-img  " ,{ origin: "left" });
    ScrollReveal().reveal(".home-content p, .about-content  " ,{ origin: "right" });

    /********************* typed js */
    const typed = new Typed(".multiple-text", {
        strings:["Frontend Developer", "YouTuber", "Blogger"],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop: true
    });
});