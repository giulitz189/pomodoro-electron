import { useState } from 'react';

import { CounterCircle } from '../components/counter-circle/counter-circle';
import { TimerButtons } from '../components/timer-buttons/timer-buttons';
import './main.scss';

export const Main = () => {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    console.log('Start clicked');
    setStarted(true);
  };
  const handlePause = () => {
    console.log('Pause clicked');
    setStarted(false);
  };
  const handleReset = () => {
    console.log('Reset clicked');
    setStarted(false);
  };

  return (
    <div className="main-container">
      <CounterCircle />
      <TimerButtons started={started} onStart={handleStart} onPause={handlePause} onReset={handleReset} />
    </div>
  );
};