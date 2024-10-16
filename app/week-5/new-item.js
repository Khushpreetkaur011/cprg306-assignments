'use client';

import React, { useState } from 'react';

const NewItem = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category
    };

    console.log(item);
    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity("1");
    setCategory("produce");
  };

  return (
    <div className="flex flex-col space-y-4 text-gray-900">
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="flex">
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="p-2 border rounded w-full"
            placeholder="Item name"
          />
        </div>

        <div className="flex space-x-4 items-center">
          
          <div className="bg-white shadow-md rounded-lg p-6 w-64 flex items-center justify-between">
            <div className="text-2xl font-bold">{quantity}</div>
            <div className="flex space-x-2">
              <button
                onClick={decrement}
                disabled={quantity === 1}
                className={`px-4 py-2 border rounded bg-blue-500 hover:bg-blue-600 ${
                  quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >-</button>

              <button
                onClick={increment}
                disabled={quantity === 20}
                className={`px-4 py-2 border rounded bg-green-500 hover:bg-green-600 ${
                  quantity === 20 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >+</button>
            </div>
          </div>

          <select 
            id="category" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded w-64 py-8"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>

        </div>

        <div className="flex">
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
          >
            Add
          </button>
        </div>

      </form>
</div>

  );
};

export default NewItem;

