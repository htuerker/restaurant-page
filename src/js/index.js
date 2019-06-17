import '../styles/main.css';
import { renderPage } from './util';
import { createTabs, changeTabsPage } from './components/tabs';

(function init() {
  const content = document.getElementById('content');
  const tabs = createTabs('pages' ,['Home', 'Menu', 'About', 'Contact']);
  content.appendChild(tabs);
})();
