import React, { useState } from "react";
/* THERE ARE OTHER FILES, I SIMPLY ONLY WORKED ON THIS FORM */
function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`Order Successful! \n \nYour order was ${order}. \n \nPlease show your confirmation number for pickup.`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlfor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlfor="phone">Phone:</label>
        <input
          id="phone"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlfor="address">Address:</label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlfor="order">Order:</label>
        <input
          id="order"
          type="text"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default FoodOrderForm;
