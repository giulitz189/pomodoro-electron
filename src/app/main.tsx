import { useState } from 'react';
import { TimeInput } from '../components/time-input/time-input';
import './main.scss';

export const Main = () => {
  // const [minutes, setMinutes] = useState(0);
  const [time, setTime] = useState(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  });

  return (
    <div className="main-container">
      {/*
      <MinuteCounter value={minutes} onChange={setMinutes} />
      */}
      <TimeInput
        time={time}
        onTimeChange={(time) => setTime(time)}
      />
    </div>
  );
};