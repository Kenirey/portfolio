const toggle = document.getElementById('dark-mode-toggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

cards.forEach(card => observer.observe(card));
const projCon = document.querySelector('.projects-contact');
observer.observe(projCon);