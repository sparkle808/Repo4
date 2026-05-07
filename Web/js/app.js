// Simple UI enhancements

// Smooth fade-in on scroll
const sections = document.querySelectorAll('.section, .hero');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

sections.forEach(sec => observer.observe(sec));
