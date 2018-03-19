import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuHeader.toggleClass("site-header--is-expanded")
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
}

export default MobileMenu;