import React, { useState } from "react";

function ParentComponent() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = (itemName, itemPrice) => {
    const newItem = {
      id: Date.now(), // Using timestamp as a unique ID
      name: itemName,
      price: itemPrice,
    };
    setCartItems([...cartItems, newItem]);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="parent">
      <ChildComponent cartItems={cartItems} onRemoveItem={handleRemoveItem} />
      <AddItemForm onAddItem={handleAddItem} />
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

function AddItemForm({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (itemName && itemPrice) {
      onAddItem(itemName, parseFloat(itemPrice));
      setItemName("");
      setItemPrice("");
    }
  };

  return (
    <div className="addItemForm">
      <h2>Add Item to Cart:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Item Name: </label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <label htmlFor="itemPrice">Item Price: </label>
        <input
          type="number"
          id="itemPrice"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}

export default ParentComponent;
