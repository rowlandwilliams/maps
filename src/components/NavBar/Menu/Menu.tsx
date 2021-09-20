import { useLocation } from "react-router";
import { MenuOption } from "./MenuOption/MenuOption";
import { menuOptions } from "./menuOptions";

export const Menu = () => {
  const location = useLocation();
  return (
    <div className="flex w-full md:w-auto pt-4 md:pt-0 justify-between text-xs">
      {menuOptions.map((menuOptionObject) => (
        <MenuOption
          key={menuOptionObject.optionLabel}
          optionPath={menuOptionObject.optionPath}
          optionLabel={menuOptionObject.optionLabel}
          isActive={menuOptionObject.optionPath === location.pathname}
        />
      ))}
    </div>
  );
};
