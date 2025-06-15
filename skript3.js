document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  cards.forEach(card => {
    observer.observe(card);
  });
});

function toggleMenu() {
  const nav = document.getElementById("main-nav");
  nav.classList.toggle("show");
}
