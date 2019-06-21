import '../styles/main.css';
import createTabs from './components/tabs';

(function init() {
  const content = document.getElementById('content');
  const tabs = createTabs('pages' ,['Home', 'Menu', 'About', 'Contact']);
  content.appendChild(tabs);
})();
