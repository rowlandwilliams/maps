import classNames from "classnames";
import { Link } from "react-router-dom";

interface Props {
  optionPath: string;
  optionLabel: string;
  isActive: boolean;
  handleOptionClick: (optionLabel: string) => void;
}

export const MenuOption = ({
  optionPath,
  optionLabel,
  isActive,
  handleOptionClick,
}: Props) => {
  return (
    <Link
      to={optionPath}
      className={classNames("px-2 transition-all duration-150 text-black", {
        "text-opacity-40": !isActive,
        "pointer-events-none": isActive,
      })}
      onClick={() => handleOptionClick(optionLabel)}
    >
      {optionLabel}
    </Link>
  );
};
