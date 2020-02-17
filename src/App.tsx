import React from 'react';
import './App.css';
import BonneteauGame from './components/BonneteauGame';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BonneteauGame />
      </header>
    </div>
  );
};

export default App;
