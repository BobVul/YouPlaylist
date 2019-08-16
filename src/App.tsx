import React from 'react';
import './App.css';
import { Grommet } from 'grommet';

const App: React.FC = () => {
  return (
    <Grommet plain>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Grommet>
  );
}

export default App;
