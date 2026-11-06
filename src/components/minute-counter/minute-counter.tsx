import { CustomNumberBtn } from '../custom-number-btn/custom-number-btn';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './minute-counter.scss';

interface MinuteCounterProps {
  value: number;
  onChange: (newValue: number) => void;
}

export const MinuteCounter = ({ value, onChange }: MinuteCounterProps) => {
  return (
    <div className="container">
      <input type="number" min={0} value={value} onChange={(e) => onChange(Number(e.target.value))} />
      <div className="buttons">
        <CustomNumberBtn
          icon={faChevronUp}
          onClick={() => onChange(value + 1)}
        />
        <CustomNumberBtn
          icon={faChevronDown}
          onClick={() => {
            if (value > 0) onChange(value - 1);
          }}
        />
      </div>
    </div>
  );
};