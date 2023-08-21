let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideContainer = document.querySelector(".slides");
const dotsContainer = document.querySelector(".pagination");
let sliderInterval;

for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span");
    dot.className = "dot";
    dot.addEventListener("click", function() {
        clearInterval(sliderInterval);
        slideIndex = i;
        updateSlider();
        startSliderInterval();
    });
    dotsContainer.appendChild(dot);
}

function updateSlider() {
    const slideWidth = slideContainer.clientWidth;
    slideContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;

    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}

function startSliderInterval() {
    sliderInterval = setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        updateSlider();
    }, 5000);
}

// Adding event listener to pause slider on hover
slideContainer.addEventListener("mouseenter", function() {
    clearInterval(sliderInterval);
});

// Adding event listener to restart slider when hover ends
slideContainer.addEventListener("mouseleave", function() {
    startSliderInterval();
});

updateSlider();
startSliderInterval();
