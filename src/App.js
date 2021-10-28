import './App.css';
import { Adsense } from '@ctrl/react-adsense';
import { useEffect, useState } from 'react';
import { gameEventsEmiiter } from './events'

const CloseButton = ({ onClick })  => {
  return (
    <button
      className="flex items-center justify-center rounded-md bg-black px-5 py-2 shadow-2xl"
      onClick={onClick}
      style={{
        background: 'white',
        color: 'rgba(0,0,0,0.7)',
      }}
    >
      Close
    </button>
  )
}

function App() {
  const [adShow, setAdShow] = useState(true)

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
    <div className="absolute top-0 w-full h-full text-white">
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
        <CloseButton onClick={() => setAdShow(false)} />
      </div>
    </div>
  );
}

export default App;

