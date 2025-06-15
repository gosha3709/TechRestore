const form = document.getElementById('rejestracjaForm');
const modal = document.getElementById('modal');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  modal.classList.add('active');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 2000);
});


