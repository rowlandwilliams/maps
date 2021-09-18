import { useState } from "react";
import { MenuOption } from "./MenuOption/MenuOption";
import { menuOptions } from "./menuOptions";

export const Menu = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="flex justify-between text-xs">
      {menuOptions.map((menuOptionObject) => (
        <MenuOption
          key={menuOptionObject.optionLabel}
          optionPath={menuOptionObject.optionPath}
          optionLabel={menuOptionObject.optionLabel}
        />
      ))}
    </div>
  );
};
