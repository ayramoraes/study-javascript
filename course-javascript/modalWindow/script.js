'use strict';

const modals = document.querySelectorAll('.modal');
const overlays = document.querySelectorAll('.overlay');
const buttonCloseModals = document.querySelectorAll('.close-modal');
const buttonOpenModal = document.querySelectorAll('.show-modal');

const openModal = function (index) {
  modals[index].classList.remove('hidden');
  overlays[index].classList.remove('hidden');
};

const closeModal = function (index) {
  modals[index].classList.add('hidden');
  overlays[index].classList.add('hidden');
};

buttonOpenModal.forEach(function (button, index) {
  button.addEventListener('click', function () {
    openModal(index);
  });
});

buttonCloseModals.forEach(function (button, index) {
  button.addEventListener('click', function () {
    closeModal(index);
  });
});

overlays.forEach(function (overlay, index) {
  overlay.addEventListener('click', function () {
    closeModal(index);
  });
});

modals.forEach(function (modal, index) {
  if (!modal.classList.contains('hidden')) {
    closeModal(index);
    return; 
  }
});