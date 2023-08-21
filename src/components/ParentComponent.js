import React, { useState } from "react";

function ParentComponent() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 15 },
  ]);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent cartItems={cartItems} onRemoveItem={handleRemoveItem} />
    </div>
  );
}

function ChildComponent({ cartItems, onRemoveItem }) {
  return (
    <div className="child">
      <h2>Cart Items:</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span id="itemName">{item.name}</span> -{" "}
            <span id="itemPrice">${item.price}</span>
            <button onClick={() => onRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParentComponent;
