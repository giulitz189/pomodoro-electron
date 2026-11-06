import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import './custom-number-btn.scss';

interface CustomNumberBtnProps {
  icon: IconDefinition;
  onClick: () => void;
}

export const CustomNumberBtn = ({ icon, onClick }: CustomNumberBtnProps) => {
  return (
    <FontAwesomeIcon className="custom-number-btn" icon={icon} onClick={onClick} />
  );
};