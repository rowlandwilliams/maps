import { Link } from "react-router-dom";
import { MenuOptionObject } from "../../../../types/types";

export const MenuOption = ({ optionPath, optionLabel }: MenuOptionObject) => {
  return (
    <Link to={"/" + optionPath} className="px-2">
      {optionLabel}
    </Link>
  );
};
