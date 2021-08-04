export const className = {
  tabLink: "tab__link",
  tabLinkActive: "tab__link--active",
  tabContent: "tab__content",
  tabContentActive: "tab__content--active",
  headerNav: "header__nav-item",
  headerNavActive: "header__nav-item--active",
  footerNav: "footer__nav-item",
  footerNavActive: "footer__nav-item--active",
};

export function toggleTab(index) {
  toggleActiveElement(className.tabLink, className.tabLinkActive, index);
  toggleActiveElement(className.tabContent, className.tabContentActive, index);
}

export function toggleHeaderNav(index) {
  toggleActiveElement(className.headerNav, className.headerNavActive, index);
}

export function toggleFooterNav(index) {
  toggleActiveElement(className.footerNav, className.footerNavActive, index);
}

// only set activeElementClassName to element that has index=index
function toggleActiveElement(groupClassName, activeElementClassName, index) {
  const group = document.getElementsByClassName(groupClassName);
  for (let i = 0; i < group.length; i++) {
    if (i === index) {
      group[i].classList.add(activeElementClassName);
    } else {
      group[i].classList.remove(activeElementClassName);
    }
  }
}
