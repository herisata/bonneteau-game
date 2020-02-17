import React from 'react';
import './styles.css';
import Ball from '../Ball/Ball';

interface Props {
  showBall?: boolean;
  onCupClick?(): void;
}

const Cup: React.FC<Props> = ({ showBall, onCupClick }: Props) => {
  return (
    <div className="cup-with-ball">
      <div className="cup" onClick={onCupClick} />
      {showBall && <Ball />}
    </div>
  );
};

export default Cup;
