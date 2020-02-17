import React from 'react';
import './styles.css';

interface Props {
  showBall?: boolean;
  onCupClick?(): void;
}

const Cup: React.FC<Props> = ({ showBall, onCupClick }: Props) => {
  return <div onClick={onCupClick}>Cup {showBall && 'ball'}</div>;
};

export default Cup;
