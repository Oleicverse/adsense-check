import './App.css';
import { Adsense } from '@ctrl/react-adsense';
import { useState } from 'react';


const CloseButton = ({ onClick }) => {
  return (
    <button className="border-2" onClick={onClick}>
      Close
    </button>
  )
}

const ShowButton = ({ onClick }) => {
  return (
    <button className="border-2" onClick={onClick}>
      Show
    </button>
  )
}

function App() {
  const [adShow, setAdShow] = useState(true)

  return (
    <div className="App h-screen text-white"
 style={{ background: 'url(https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png)' }}>
      <ShowButton onClick={() => setAdShow(true)}/>
      <div
        className="flex flex-col h-full items-center justify-center backdrop-filter backdrop-blur-lg"
        style={{ display: adShow ? "" : "none" }}>
        <div className="w-1/2 h-1/2">
          <Adsense
            client="ca-pub-5006765521801507"
            slot="6935948671"
            format=""
          />
        </div>
        <CloseButton onClick={() => setAdShow(false)} />
      </div>
    </div>
  );
}

export default App;
