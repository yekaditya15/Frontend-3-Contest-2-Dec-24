
# Restaurant Order Management App

## Description

This is a simple React-based restaurant order management application. It simulates the process of taking an order, preparing it, and completing the payment. The app fetches a menu from a remote API, generates random orders, and goes through the order preparation and payment process, with each step logged to the console.

## Features

- Fetches the menu from a remote JSON file.
- Simulates an order process with random items chosen from the menu.
- Displays order preparation status.
- Simulates payment and thanks the user upon successful payment.

## Tech Stack

- **React**: JavaScript library for building the user interface.
- **CSS**: Styling the components.
- **JavaScript (ES6+)**: Handles logic for taking orders, preparing them, and simulating payment.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yekaditya15/Frontend-3-Contest-2-Dec-24.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd Frontend-3-Contest-2-Dec-24
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the application**:
   ```bash
   npm start
   ```

   This will run the app on `http://localhost:3000`.

## App Overview

The app contains the following components and logic:

### 1. **Menu Data Fetching**
   - The menu data is fetched from an external JSON file hosted on GitHub.
   - Once the data is fetched, it's stored in the state and displayed in a list of items.

### 2. **Order Creation**
   - The app simulates the process of creating an order by selecting three random items from the menu.
   - The order object contains the order ID, selected items, and the total price, which is logged to the console.

### 3. **Order Preparation**
   - After the order is created, a simulated preparation process occurs.
   - The order's preparation status is logged to the console.

### 4. **Payment Process**
   - After the order is prepared, the app simulates a payment process.
   - The payment status is updated and logged to the console.
   - A "Thank you" alert is shown after payment is successfully processed.

### 5. **Components**:
   - The app is divided into several components for modularity:
     - **App Component**: Main component that handles the flow of the app.
     - **Menu Card**: Displays individual menu items.
     - **Order Functions**: Helper functions for creating the order, preparing it, and processing payment.

### 6. **Console Logs**
   - The app logs each step of the order process to the console for debugging purposes.
   - You will see logs for menu fetching, item selection, order creation, preparation, and payment.



## Future Enhancements

- **User Authentication**: Add authentication for users to sign in and place orders.
- **Cart System**: Implement a cart system where users can add items and place orders manually.
- **Backend Integration**: Integrate with a backend to store orders and process payments in a real-world scenario.

