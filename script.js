const modal = document.getElementById("presModal");
const btn = document.getElementById("openPres");
const span = document.getElementsByClassName("close")[0];
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";

document.getElementById("nextSlide").onclick = () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
};

document.getElementById("prevSlide").onclick = () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
};