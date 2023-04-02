const modalOpen = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

modalOpen.className += ' modal_active';

const modalClose = document.querySelectorAll('.modal__close');
const buttonSuccess = document.querySelector('.show-success');

// console.log(modalClose);

for (let i of modalClose) {
  i.onclick = function closeModal() {
    const modalForClose = this.closest('.modal');
    modalForClose.className = 'modal';
  };
}

buttonSuccess.onclick = () => {
  modalSuccess.className += ' modal_active';
  modalOpen.className = 'modal';
};
