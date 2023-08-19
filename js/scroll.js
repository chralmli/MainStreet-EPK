// Add background to header on scroll ++
window.addEventListener('scroll', function() {
    const header = document.querySelector("header");
    const topSection = document.querySelector(".top-section");
    if (window.scrollY > 130) {
        header.style.backgroundColor = "#333";
        this.document.querySelectorAll("nav li a").forEach(link => {
            link.style.color = "white";
        });
    } else {
        topSection.style.background = "transparent";
        document.querySelectorAll("nav li a").forEach(link => {
            link.style.color = "rgba(0, 0, 0, 0.85)"
        });
    }
});

// solution for centered logo and nav
window.addEventListener("scroll", function() {
    const logoHeight = document.querySelector("#logo").offsetHeight;
    const header = document.querySelector("header");
    const placeholder = document.getElementById("navbar-placeholder");

    if (window.scrollY >= logoHeight) {
        header.style.position = "fixed";
        header.style.top = "0";
        placeholder.style.height = `${header.offsetHeight}px`;
    } else {
        header.style.position = "relative";
        header.style.top = "auto";
        header.style.backgroundColor = "transparent";
        placeholder.style.height = "0";
    }
});

// smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start' 
        });
    });
});
