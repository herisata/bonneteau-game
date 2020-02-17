import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';
import Cup from './Cup/Cup';
import './styles.css';

interface Props {}

const CUPS = [
  {
    key: 0,
    hasBall: false,
  },
  {
    key: 1,
    hasBall: false,
  },
  {
    key: 2,
    hasBall: true,
  },
];

enum GAME_STATE {
  IDLE,
  STARTED,
  WIN,
  LOSS,
}
const FLIP_DURATION = 1000;
const CUP_MOVES = 7;

const getRandomIndex = (max: number, except?: number) => {
  let index: number | undefined;
  while (!index || index === except) {
    index = Math.floor(Math.random() * max + 1);
  }
  return index! - 1;
};

const BonneteauGame: React.FC<Props> = () => {
  // game state
  const [gameState, setGameState] = useState(GAME_STATE.IDLE);
  const [cupPositions, setCupPositions] = useState(CUPS);
  const [movesLeft, setMovesLeft] = useState(0);

  // handlers
  const onPlayButtonClick = () => {
    setGameState(GAME_STATE.STARTED);
    setTimeout(() => {
      setMovesLeft(CUP_MOVES);
    }, FLIP_DURATION);
  };
  const onCupClick = (hasBall: boolean) => () => {
    if (gameState !== GAME_STATE.STARTED) return;
    setGameState(hasBall ? GAME_STATE.WIN : GAME_STATE.LOSS);
  };

  const swapRandomCups = () => {
    const pos1 = getRandomIndex(cupPositions.length);
    const pos2 = getRandomIndex(cupPositions.length, pos1);
    const positions = [...cupPositions];
    // eslint-disable-next-line prefer-destructuring
    positions[pos1] = positions.splice(pos2, 1, positions[pos1])[0];
    setCupPositions(positions);
    setTimeout(() => {
      setMovesLeft(movesLeft - 1);
    }, FLIP_DURATION);
  };
  useEffect(() => {
    if (movesLeft) {
      swapRandomCups();
    }
  }, [movesLeft]);

  return (
    <div className="parent">
      {gameState !== GAME_STATE.STARTED && gameState !== GAME_STATE.IDLE && (
        <div className={gameState === GAME_STATE.WIN ? 'txt-win' : 'txt-loss'}>
          {gameState === GAME_STATE.WIN ? 'Gagné' : 'Perdu'}
        </div>
      )}
      <FlipMove
        className="main"
        duration={FLIP_DURATION}
        easing="cubic-bezier(.12,.36,.14,1.2)"
        // onStart={this.startMove.bind(this)}
      >
        {cupPositions.map(cup => (
          <div key={cup.key} className="cup-container">
            <Cup
              showBall={gameState !== GAME_STATE.STARTED && cup.hasBall}
              onCupClick={onCupClick(cup.hasBall)}
            />
          </div>
        ))}
      </FlipMove>
      {gameState !== GAME_STATE.STARTED && (
        <button type="button" className="button" onClick={onPlayButtonClick}>
          Jouer
        </button>
      )}
    </div>
  );
};

export default BonneteauGame;
