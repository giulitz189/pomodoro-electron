import "./switcher.scss";

interface SwitcherProps {
  labels: [string, string];
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Switcher = ({ labels, value, onChange }: SwitcherProps) => {
  return (
    <div className="switcher-container">
      <span>{labels[0]}</span>
      <div className="switcher" onClick={() => onChange(!value)}>
        <div className={`switcher-handle ${value}`}></div>
      </div>
      <span>{labels[1]}</span>
    </div>
  );
};