import { useState } from 'react';

import { MinuteCounter } from '../minute-counter/minute-counter';
import { TimeInput } from '../time-input/time-input';
import { Switcher } from '../switcher/switcher';
import './counter-circle.scss';

enum CounterCircleMode {
  Minutes,
  Time
}

export const CounterCircle = () => {
  const [minutes, setMinutes] = useState(0);
  const [time, setTime] = useState(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  });
  const [mode, setMode] = useState(CounterCircleMode.Minutes);

  return (
    <div className="counter-circle">
      <Switcher
        labels={['Minutes', 'Time']}
        value={mode === CounterCircleMode.Time}
        onChange={(v) => setMode(v ? CounterCircleMode.Time : CounterCircleMode.Minutes)}
      />
      {mode === CounterCircleMode.Minutes && (
        <MinuteCounter value={minutes} onChange={setMinutes} />
      )}
      {mode === CounterCircleMode.Time && (
        <TimeInput
          time={time}
          onTimeChange={(time) => setTime(time)}
        />
      )}
    </div>
  );
};