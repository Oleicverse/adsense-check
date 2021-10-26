var events = require("events")

const gameEventsEmiiter = new events.EventEmitter();


const showAd = () => {
  gameEventsEmiiter.emit('showAd')
}

const hideAd = () => {
  gameEventsEmiiter.emit('hideAd')
}

module.exports = {
  gameEventsEmiiter,
  showAd,
  hideAd,
}
