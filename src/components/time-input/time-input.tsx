import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import { DropdownTimer } from "../dropdown-timer/dropdown-timer";
import "./time-input.scss";

interface TimeInputProps {
  time: string;
  onTimeChange: (time: string) => void;
}

export const TimeInput = ({ time, onTimeChange }: TimeInputProps) => {
  const [selectorOpen, setSelectorOpen] = useState(false);

  return (
    <div className="container">
      <input type="time" value={time} onChange={(e) => onTimeChange(e.target.value)} />
      <div className="clock-selector" onClick={() => setSelectorOpen(!selectorOpen)}>
        <FontAwesomeIcon icon={faClock} />
      </div>
      {selectorOpen &&
        <DropdownTimer
          initialHour={parseInt(time.split(":")[0])}
          initialMinute={parseInt(time.split(":")[1])}
          onTimeChange={(hour, minute) => {
            onTimeChange(`${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`);
          }}
          onClose={() => setSelectorOpen(false)}
        />
      }
    </div>
  );
};