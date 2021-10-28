'use strict';
const modal = document.querySelector('.modal');
const openModalBtns = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overLay = document.querySelector('.overlay');

const openModal = function () {
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
}
const closeModal = function () {
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
}
openModalBtns.forEach((openBtn) => {
    openBtn.addEventListener('click', openModal);
});
closeModalBtn.addEventListener('click', closeModal);

overLay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
})