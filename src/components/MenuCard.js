import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="menu-card">
      <img
        src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={item.name}
        className="menu-card-image"
      />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <span className="price">${item.price}</span>
      <button className="add-to-cart">
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default MenuCard;
