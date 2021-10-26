import './App.css';
import { Adsense } from '@ctrl/react-adsense';
import { useEffect, useState } from 'react';
import { gameEventsEmiiter } from './events'


function App() {
  const [adShow, setAdShow] = useState(false)

  useEffect(() => {
    const onShowAd = () => setAdShow(true)
    const onHideAd = () => setAdShow(false)
    gameEventsEmiiter.addListener("showAd", onShowAd)
    gameEventsEmiiter.addListener("hideAd", onHideAd)

    return () => {
      gameEventsEmiiter.removeListener("showAd", onShowAd)
      gameEventsEmiiter.removeListener("hideAd", onHideAd)
    }
  })

  return (
    <div className="App h-screen text-white">
      <div
        className="flex flex-col h-full items-center justify-center backdrop-filter backdrop-blur-lg"
        style={{ display: adShow ? "" : "none" }}>
        <div className="w-1/2 h-1/2">
          <Adsense
            client="ca-pub-5006765521801507"
            slot="6935948671"
            format=""
            className="w-full h-full"
          />
        </div>
        <button
          onClick={() => setAdShow(false)}
          style={{ background: 'blue' }}
        >
          Close this Ad
        </button>
      </div>
    </div>
  );
}

export default App;
