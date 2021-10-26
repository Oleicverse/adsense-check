import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { showAd, hideAd } from './events'

window.showAd = showAd
window.hideAd = hideAd

const addAdSenseScript = () => {
  const script = document.createElement('script')
  script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5006765521801507"
  script.crossorigin = "anonymous"
  script.async = true
  document.getElementsByTagName('head')[0].appendChild(script)
}

addAdSenseScript()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
