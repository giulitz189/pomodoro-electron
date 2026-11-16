import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faRotateLeft, faPause } from '@fortawesome/free-solid-svg-icons';

import './timer-buttons.scss';

interface TimerButtonsProps {
  started: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
};

export const TimerButtons = ({ started, onStart, onPause, onReset }: TimerButtonsProps) => {
  const [positiveClicked, setPositiveClicked] = useState(false);
  const [negativeClicked, setNegativeClicked] = useState(false);

  return (
    <div className="timer-buttons">
      <div
        className={`button ${positiveClicked ? 'clicked' : ''}`}
        onMouseDown={() => setPositiveClicked(true)}
        onMouseUp={() => {
          setPositiveClicked(false);
          if (started) onPause();
          else onStart();
        }}
      >
        <FontAwesomeIcon icon={started ? faPause : faPlay} />
      </div>
      <div
        className={`button negative ${negativeClicked ? 'clicked' : ''}`}
        onMouseDown={() => setNegativeClicked(true)}
        onMouseUp={() => {
          setNegativeClicked(false);
          onReset();
        }}
      >
        <FontAwesomeIcon icon={faRotateLeft} />
      </div>
    </div>
  );
};