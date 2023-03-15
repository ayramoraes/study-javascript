const modals = document.querySelectorAll('.modal');
const overlays = document.querySelectorAll('.overlay');
const buttonCloseModals = document.querySelectorAll('.close-modal');
const buttonOpenModal = document.querySelectorAll('.show-modal');

const openModal = function (button) {
  const modal = button.closest('.modal');
  modal.classList.remove('hidden');
  const overlay = modal.previousElementSibling;
  overlay.classList.remove('hidden');
};

const closeModal = function (button) {
  const modal = button.closest('.modal');
  modal.classList.add('hidden');
  const overlay = modal.previousElementSibling;
  overlay.classList.add('hidden');
};

buttonsOpenModal.forEach(function (button) {
  button.addEventListener('click', function (event) {
    openModal(event.target);
  });
});

buttonsCloseModals.forEach(function (button) {
  button.addEventListener('click', function (event) {
    closeAllModals(event.target);
  });
});

overlays.forEach(function (overlay) {
  overlay.addEventListener('click', function (event) {
    closeAllModals(event.target);
  });
});

modals.forEach(function (modal) {
  if (!modal.classList.contains('hidden')) {
    closeAllModals(modal.querySelector('.close-modal'));
    return; 
  }
});
