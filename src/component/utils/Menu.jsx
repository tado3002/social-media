import React from "react";
import { Plus, Person } from "@phosphor-icons/react/dist/ssr";
const Menu = () => {
  return (
    <div className="sm:hidden lg:flex flex-col gap-4 absolute left-0 mt-20 py-8 px-4 rounded-full bg-base-300">
      <Plus size={25} />
      <Person size={25} />
    </div>
  );
};

export default Menu;
