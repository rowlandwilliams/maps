import classNames from "classnames";
import { Link } from "react-router-dom";

interface Props {
  optionPath: string;
  optionLabel: string;
  isActive: boolean;
}

export const MenuOption = ({ optionPath, optionLabel, isActive }: Props) => {
  return (
    <Link
      to={optionPath}
      className={classNames("px-2 transition-all duration-150 text-black", {
        "text-opacity-40": !isActive,
        "pointer-events-none": isActive,
      })}
    >
      {optionLabel}
    </Link>
  );
};
