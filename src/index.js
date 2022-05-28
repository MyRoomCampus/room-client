import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css'
import '../src/assets/global-style.css';
import App from './App';

if (window.matchMedia) {
  const mql = window.matchMedia('(prefers-color-scheme: dark)');

  function matchMode(e) {
    const body = document.body;
    if (e.matches) {
      if (!body.hasAttribute('theme-mode')) {
        body.setAttribute('theme-mode', 'dark');
      }
    } else {
      if (body.hasAttribute('theme-mode')) {
        body.removeAttribute('theme-mode');
      }
    }
  }

  mql.addListener(matchMode);
  matchMode(mql)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

