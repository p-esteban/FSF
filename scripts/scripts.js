// scripts.js

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Alterna la clase 'show' para mostrar/ocultar el menú
});


/// carrusel
/* let currentIndex = 0; // Índice de la imagen actual
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showSlide(index) {
    const newIndex = (index + totalImages) % totalImages; // Asegura que el índice sea cíclico
    const offset = -newIndex * 100; // Calcula el desplazamiento
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`; // Aplica el desplazamiento
    currentIndex = newIndex; // Actualiza el índice actual
}

function moveSlide(step) {
    showSlide(currentIndex + step); // Mueve al siguiente o anterior
}

// Mostrar la primera imagen al cargar
showSlide(currentIndex);
 */
