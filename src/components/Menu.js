import React from "react";
import MenuCard from "./MenuCard";

const Menu = ({ menuData }) => {
  return (
    <div className="menu">
      {menuData.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Menu;
