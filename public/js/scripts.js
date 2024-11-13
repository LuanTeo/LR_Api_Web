const openCanvasButton = document.getElementById("openCanvas");
const closeCanvasButton = document.getElementById("closeCanvas");
const offcanvas = document.getElementById("offcanvas");
const overlay = document.getElementById("overlay");

// Função para abrir o offcanvas
openCanvasButton.addEventListener("click", () => {
  offcanvas.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
});

// Função para fechar o offcanvas
closeCanvasButton.addEventListener("click", () => {
  offcanvas.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

// Fechar o offcanvas ao clicar no overlay
overlay.addEventListener("click", () => {
  offcanvas.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

const carousel = document.getElementById("carousel");
const totalSlides = carousel.children.length;
let currentSlide = 0;

// Função para mover o carrossel para o slide desejado
function moveToSlide(slideIndex) {
  const offset = -slideIndex * 100; // Move o carrossel pela largura dos slides
  carousel.style.transform = `translateX(${offset}%)`;
}

// Botão para o slide anterior
document.getElementById("prevButton").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  moveToSlide(currentSlide);
  resetAutoSlide(); // Reinicia o temporizador
});

// Botão para o próximo slide
document.getElementById("nextButton").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  moveToSlide(currentSlide);
  resetAutoSlide(); // Reinicia o temporizador
});

// Mudança automática de slides
function autoSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  moveToSlide(currentSlide);
}

let slideInterval = setInterval(autoSlide, 10000); // Troca de slide a cada 3 segundos

// Função para reiniciar o temporizador quando o usuário interage com o carrossel
function resetAutoSlide() {
  clearInterval(slideInterval); // Para o temporizador atual
  slideInterval = setInterval(autoSlide, 8000); // Reinicia o temporizador
}