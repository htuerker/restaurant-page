import { renderPage, changeTabsPage } from '../util'

const createTabs = (id, items) => {
  const tabs = document.createElement('div');
  tabs.setAttribute('id', id);
  tabs.setAttribute('class', 'tabs');
  const tabsLinks = document.createElement('div');
  tabsLinks.setAttribute('class', 'tabs-items');
  for(let i = 0; i < items.length; i++) {
    const link = document.createElement('div');
    link.setAttribute('class', 'tabs-item');
    link.setAttribute('id', `tabs-item-${i}`);
    link.addEventListener('click', () => changeTabsPage(id, i));
    link.innerHTML = items[i];
    tabsLinks.appendChild(link);
  }
  const tabsBody = document.createElement('div');
  tabsBody.setAttribute('class', 'tabs-body');
  tabsBody.innerHTML = renderPage(0);
  tabsLinks.firstChild.classList.add('active');
  tabs.appendChild(tabsLinks);
  tabs.appendChild(tabsBody);
  return tabs;
}

export { createTabs }
