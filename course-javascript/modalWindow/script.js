'use strict';

const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const buttonsCloseModals = document.querySelectorAll('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal');

function openModal(index) {
  modals[index].classList.remove('hidden');
  overlay.classList.remove('hidden');
};

function closeAllModals() {
  modals.forEach((modal) => {
    modal.classList.add('hidden')
  })
  overlay.classList.add('hidden');
};

buttonsOpenModal.forEach(function (button, index) {
  button.addEventListener('click', function () {
    openModal(index);
  });
});

buttonsCloseModals.forEach(function (button) {
  button.addEventListener('click', function () {
    closeAllModals();
  });
});

overlay.addEventListener('click', function () {
  closeAllModals();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeAllModals();
    document.activeElement.blur()
  }
});

closeAllModals();