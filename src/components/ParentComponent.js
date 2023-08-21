import React, { useState } from "react";

function ParentComponent() {
  const [name, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [user, setUser] = useState({ id: "", name: "", price: "" });

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 15 },
  ]);
  console.log(user);
  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  function handleAdd() {
    let id = cartItems.length + 1;
    setUser({ ...user, id: id, name: name, price: price });
  }
  function handleSubmit(e) {
    setCartItems((pev) => [...pev, user]);
    e.preventDefault();
    setItem("");
    setPrice("");
  }
  return (
    <div className="parent">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" onClick={handleAdd}>
          Add Item
        </button>
      </form>
      <ChildComponent cartItems={cartItems} onRemoveItem={handleRemoveItem} />
    </div>
  );
}

function ChildComponent({ cartItems, onRemoveItem }) {
  {
    console.log(cartItems);
  }
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
