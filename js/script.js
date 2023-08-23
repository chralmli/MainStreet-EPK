document.addEventListener("DOMContentLoaded", function() {
    setupFadeInAnimations();
});

function setupFadeInAnimations() {
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0px)";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 1s, transform 1s";
        fadeInObserver.observe(section);
    });
}

// Add function to make it possible to translate the bio
document.getElementById("toggle-translate").addEventListener("click", function() {
    const norwegianBio = document.getElementById("norwegian-bio");
    const englishBio = document.getElementById("english-bio");
    const translateText = document.querySelector(".translate-text");

    if (norwegianBio.style.display === "none") {
        norwegianBio.style.display = "block";
        englishBio.style.display = "none";
        translateText.innerHTML = "Translate to English";
    } else {
        norwegianBio.style.display = "none";
        englishBio.style.display = "block";
        translateText.innerHTML = "Oversett til norsk";
    }
});