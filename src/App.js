import './App.css';
import { Adsense } from '@ctrl/react-adsense';

function App() {
  return (
    <div className="App h-screen">
      <div className="flex flex-col h-full items-center justify-center">
        <div>
          <Adsense
            client="ca-pub-5006765521801507"
            slot="6935948671"
            style={{ width: 500, height: 300 }}
            format=""
          />
        </div>

      </div>
    </div>
  );
}

export default App;
