import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./roller-selector.scss";

export enum RollerType {
  Hour,
  Minute
}

interface RollerSelectorProps {
  type: RollerType;
  value: number;
  onChange: (value: number) => void;
}

export const RollerSelector = ({ type, value, onChange }: RollerSelectorProps) => {
  const maxRollerValues = type === RollerType.Hour ? 24 : 60;

  return (
    <div className="roller-selector">
      <div className="roller-control" onClick={() => onChange((value + 1) % maxRollerValues)}>
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
      <div className="roller-values">
        {[-2, -1, 0, 1, 2]
          .map((v, i) => {
            let valueStyle = "";
            switch (i) {
              case 0:
              case 4:
                valueStyle = "faded";
                break;
              case 1:
              case 3:
                valueStyle = "semi-faded";
                break;
            }
            const totalValue = value + v;
            const displayValue = totalValue < 0 ?
              (totalValue + maxRollerValues) % maxRollerValues :
              totalValue % maxRollerValues;
            return (
              <div key={displayValue} className={`roller-value ${valueStyle}`}>
                {displayValue < 10 ? `0${displayValue}` : displayValue}
              </div>
            );
          })}
      </div>
      <div
        className="roller-control"
        onClick={() => onChange((value - 1 + maxRollerValues) % maxRollerValues)}>
          <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
};