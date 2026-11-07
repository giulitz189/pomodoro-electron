import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import "./time-input.scss";

interface TimeInputProps {
  time: string;
  onTimeChange: (time: string) => void;
}

export const TimeInput = ({ time, onTimeChange }: TimeInputProps) => {
  return (
    <div className="container">
      <input type="time" value={time} onChange={(e) => onTimeChange(e.target.value)} />
      {/* TODO: Implement custom clock dropdownselector */}
      <FontAwesomeIcon className="clock-selector" icon={faClock} />
    </div>
  );
};