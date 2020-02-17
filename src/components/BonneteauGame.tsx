import React from 'react';
import Cup from './Cup/Cup';
import './styles.css';

interface Props {}

const BonneteauGame: React.FC<Props> = () => {
  return (
    <div className="parent">
      <div className="main">
        <Cup />
        <Cup />
        <Cup />
      </div>
      <button type="button" className="button">
        Jouer
      </button>
    </div>
  );
};

export default BonneteauGame;
