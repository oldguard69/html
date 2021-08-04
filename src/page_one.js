import "./scss/page_one/main.scss";
import {
  toggleFooterNav,
  toggleTab,
  toggleHeaderNav,
  className,
} from "./asset/javascript/page_one/common";

function initializeEventForElements(className, eventName, eventHandler) {
  const items = document.getElementsByClassName(className);
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener(eventName, () => eventHandler(i));
  }
}

initializeEventForElements(className.tabLink, 'click', toggleTab);
initializeEventForElements(className.headerNav, 'click', toggleHeaderNav);
initializeEventForElements(className.footerNav, 'click', toggleFooterNav);


function handleActionsOfHeaderDropdownMenu() {
  const navMenu = document.getElementById('header__nav');
  const navToggleButton = document.getElementById('header__dropdown-toggle');
  
  navToggleButton.addEventListener('click', () => {
      navMenu.classList.toggle('header__nav--display');
  });
}

handleActionsOfHeaderDropdownMenu();
