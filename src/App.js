import React, { useEffect, useState } from "react";
import Sidebar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { takeOrder, orderPrep, payOrder } from "./components/orderUtils";
import "./styles/App.css";

const App = () => {
  const [menuData, setMenuData] = useState([]);
  const [order, setOrder] = useState(null);
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderCreated, setOrderCreated] = useState(false);

  // Fetch the menu data
  const getMenu = () => {
    fetch(
      "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
    )
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Automatically generate a random order when the menu data is ready
  useEffect(() => {
    getMenu();
  }, []);

  useEffect(() => {
    if (menuData.length > 0 && !orderCreated) {
      setOrderCreated(true);
      takeOrder(menuData)
        .then((orderObject) => {
          setOrder(orderObject);
          return orderPrep();
        })
        .then((status) => {
          setOrderStatus(status);
          return payOrder();
        })
        .then((paymentStatus) => {
          setOrderStatus(paymentStatus);
          alert("Thank you for your order! Your payment is successful.");
        });
    }
  }, [menuData, orderCreated]);

  return (
    <div className="app">
      <Sidebar />
      <Navbar />
      <div className="content">
        <h2 className="menu-heading">Menu</h2>
        <Menu menuData={menuData} />
      </div>
    </div>
  );
};

export default App;
