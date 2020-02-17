import React, { useState } from 'react';
import Cup from './Cup/Cup';
import './styles.css';

interface Props {}

const CUPS = [
  {
    hasBall: false,
  },
  {
    hasBall: true,
  },
  {
    hasBall: false,
  },
];

enum GAME_STATE {
  IDLE,
  STARTED,
  WIN,
  LOSS,
}

const BonneteauGame: React.FC<Props> = () => {
  // game state
  const [gameState, setGameState] = useState(GAME_STATE.IDLE);

  // handlers
  const onPlayButtonClick = () => {
    setGameState(GAME_STATE.STARTED);
  };
  const onCupClick = (hasBall: boolean) => () => {
    if (gameState !== GAME_STATE.STARTED) return;
    setGameState(hasBall ? GAME_STATE.WIN : GAME_STATE.LOSS);
  };

  return (
    <div className="parent">
      {gameState !== GAME_STATE.STARTED && gameState !== GAME_STATE.IDLE && (
        <text className={gameState === GAME_STATE.WIN ? 'txt-win' : 'txt-loss'}>
          {gameState === GAME_STATE.WIN ? 'Gagné' : 'Perdu'}
        </text>
      )}
      <div className="main">
        {CUPS.map(cup => (
          <Cup
            showBall={gameState !== GAME_STATE.STARTED && cup.hasBall}
            onCupClick={onCupClick(cup.hasBall)}
          />
        ))}
      </div>
      {gameState !== GAME_STATE.STARTED && (
        <button type="button" className="button" onClick={onPlayButtonClick}>
          Jouer
        </button>
      )}
    </div>
  );
};

export default BonneteauGame;
