import { useState } from 'react';
import { MinuteCounter } from '../components/minute-counter/minute-counter';
import './main.scss';

export const Main = () => {
  const [minutes, setMinutes] = useState(0);

  return (
    <div className="main-container">
      <MinuteCounter value={minutes} onChange={setMinutes} />
    </div>
  );
};