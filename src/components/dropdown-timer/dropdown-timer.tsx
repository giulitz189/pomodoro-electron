import { RollerSelector, RollerType } from "./roller-selector/roller-selector";
import "./dropdown-timer.scss";

interface DropdownTimerProps {
  initialHour: number;
  initialMinute: number;
  onTimeChange: (hour: number, minute: number) => void;
  onClose: () => void;
}

export const DropdownTimer = ({ initialHour, initialMinute, onTimeChange, onClose }: DropdownTimerProps) => {
  const changeHour = (newHour: number) => {
    if (onTimeChange) onTimeChange(newHour, initialMinute);
  };

  const changeMinute = (newMinute: number) => {
    if (onTimeChange) onTimeChange(initialHour, newMinute);
  };

  return (
    <>
      <div className="backdrop" onClick={() => { if (onClose) onClose(); }}></div>
      <div className="dropdown-timer">
        <RollerSelector type={RollerType.Hour} value={initialHour} onChange={changeHour} />
        <div className="separator">
          <p>:</p>
        </div>
        <RollerSelector type={RollerType.Minute} value={initialMinute} onChange={changeMinute} />
      </div>
    </>
  );
};