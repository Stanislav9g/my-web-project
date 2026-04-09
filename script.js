const modal = document.getElementById("presModal");
const btn = document.getElementById("openPres");
const span = document.getElementsByClassName("close")[0];
const slides = document.querySelectorAll(".slide");
const counter = document.getElementById("slideCounter");
let currentSlide = 0;

// Функция обновления счетчика
function updateCounter() {
    counter.innerText = `${currentSlide + 1} / ${slides.length}`;
}

// Открытие и закрытие
btn.onclick = () => {
    modal.style.display = "block";
    updateCounter();
};
span.onclick = () => modal.style.display = "none";

// Закрытие по клику вне окна
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Следующий слайд
document.getElementById("nextSlide").onclick = () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
    updateCounter();
};

// Предыдущий слайд
document.getElementById("prevSlide").onclick = () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    updateCounter();
};