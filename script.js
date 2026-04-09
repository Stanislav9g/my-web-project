// Находим все элементы
const modal = document.getElementById("presModal");
const btn = document.getElementById("openPres");
const span = document.getElementsByClassName("close")[0];
const slides = document.querySelectorAll(".slide");
const counter = document.getElementById("slideCounter");
let currentSlide = 0;

// Функция для обновления цифр счетчика (1 / 3, 2 / 3 и т.д.)
function updateCounter() {
    if (counter) {
        counter.innerText = `${currentSlide + 1} / ${slides.length}`;
    }
}

// Открываем окно
btn.onclick = () => {
    modal.style.display = "block";
    updateCounter();
};

// Закрываем на крестик
span.onclick = () => modal.style.display = "none";

// Закрываем, если кликнули на темный фон
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Кнопка "Вперед"
document.getElementById("nextSlide").onclick = () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
    updateCounter();
};

// Кнопка "Назад"
document.getElementById("prevSlide").onclick = () => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    updateCounter();
};
