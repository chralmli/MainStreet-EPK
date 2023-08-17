window.addEventListener('scroll', function() {
    const header = document.querySelector("header");
    const topSection = document.querySelector(".top-section");
    if (window.scrollY > 130) {
        header.style.backgroundColor = "#333";
        this.document.querySelectorAll("nav li a").forEach(link => {
            link.style.color = "white";
        });
    } else {
        topSection.style.background = "rgba(0, 0, 0, 0.5)";
        document.querySelectorAll("nav li a").forEach(link => {
            link.style.color = "#eee"
        });
    }
});

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
