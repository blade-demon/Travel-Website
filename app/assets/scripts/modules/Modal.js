import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    this.openModalButton.click(this.openModal.bind(this));
    this.closeModalButton.click(this.closeModal.bind(this));

    //press esc key close modal
    $(document).keypress(this.keyPressHandler.bind(this));
  }

  openModal() {
    this.modal.addClass('modal--is-visible');
    return false;
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible');
    return false;
  }

  keyPressHandler(e) {
    if(e.keyCode == 27) {
      this.closeModal();
    }
  }
}

export default Modal;