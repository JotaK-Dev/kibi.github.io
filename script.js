// Inicializar AOS (animaciones al hacer scroll)
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-out',
});

// Suavizar scroll manual (opcional)
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

// Animar logo al hacer scroll (opcional, queda piola)
const logo = document.querySelector('.logo');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (logo) {
    logo.style.transform = `rotate(${scrollY / 10}deg) scale(${1 + scrollY / 1000})`;
  }
});
