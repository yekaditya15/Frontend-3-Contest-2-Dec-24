export const takeOrder = (menuData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Starting order creation...");

      const randomItems = [];
      const itemsCopy = [...menuData];

      console.log("Available items in the menu:", itemsCopy);
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * itemsCopy.length);
        const selectedItem = itemsCopy.splice(randomIndex, 1)[0];
        randomItems.push(selectedItem);

        console.log(`Item selected: ${selectedItem.name}`);
      }

      const orderObject = {
        orderId: Math.floor(Math.random() * 1000),
        items: randomItems,
        total: randomItems
          .reduce((total, item) => total + item.price, 0)
          .toFixed(2),
      };

      console.log("Order created:", orderObject);
      resolve(orderObject);
    }, 2500);
  });
};

export const orderPrep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Starting order preparation...");
      const orderStatus = { order_status: true, paid: false };

      console.log("Order preparation status:", orderStatus);
      resolve(orderStatus);
    }, 1500);
  });
};

export const payOrder = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Processing payment...");
      const paymentStatus = { order_status: true, paid: true };

      console.log("Payment status:", paymentStatus);
      resolve(paymentStatus);
    }, 1000);
  });
};
