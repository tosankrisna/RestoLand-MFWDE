import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/navigation-bar';
import './components/hero-image';
import './components/food-gallery';
import './components/footer-bar';
import './components/skip-content';
import './components/loading-indicator';
import './components/error-message';
import './components/favorite-message';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
