import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { showAd, hideAd } from './events'

window.showAd = showAd
window.hideAd = hideAd


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


const observeAdAvailable = () => {
  var watchAdFilledElem = document.getElementsByTagName("ins")[0]
  var observer = new MutationObserver(function(mutations) {
    if (watchAdFilledElem.getAttribute('data-ad-status') === "filled") {
      hideAd()
    }
  });

  observer.observe(watchAdFilledElem, {
    attributes: true,
    attributeFilter: ['data-ad-status'] });
}

observeAdAvailable()

window.gameOver = () => {
  showAd()
}
