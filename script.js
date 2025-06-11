// Inicializar AOS (animaciones al hacer scroll)
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-out',
});

// Suavizar scroll manual
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
// Cambio de fondo según scroll (con transición tipo crossfade)
const bgSections = document.querySelectorAll('.bg-section');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;

  bgSections.forEach((section, index) => {
    const sectionTop = index * vh;
    const sectionBottom = sectionTop + vh;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});

// Mostrar el fondo correcto al cargar
window.dispatchEvent(new Event('scroll'));


// Animar logo al hacer scroll
const logo = document.querySelector('.logo');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (logo) {
    logo.style.transform = `rotate(${scrollY / 10}deg) scale(${1 + scrollY / 1000})`;
  }
});

// Modal de imagen
const modal = document.getElementById("img-modal");
const modalImg = document.getElementById("img-expanded");
const closeBtn = document.querySelector(".img-close");

document.querySelectorAll(".carousel img").forEach(img => {
  img.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita interferencias con drag
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Carousel arrastrable con mouse y touch
const carousel = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  document.body.style.userSelect = "none";
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
  document.body.style.userSelect = "";
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
  document.body.style.userSelect = "";
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});

// Touch support
carousel.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchend', () => {
  isDown = false;
});

carousel.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});
