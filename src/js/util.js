import { home, menu, about, contact, notFound } from './pages';

const renderPage = (index) => {
  switch(index) {
    case 0:
      return home();
    case 1:
      return menu();
    case 2:
      return about();
    case 3:
      return contact();
    default:
      return notFound();
  }
}

const changeTabsPage = (id, index) => {
  const tabs = document.getElementById(id);
  const tabsItems  = document.getElementsByClassName('tabs-items')[0];
  const tabsBody = tabs.getElementsByClassName('tabs-body')[0];

  tabsItems.getElementsByClassName('active')[0].classList.remove('active');
  tabsBody.innerHTML = renderPage(index);
  document.getElementById('tabs-item-' + index).classList.add('active');
}

export { renderPage, changeTabsPage }
