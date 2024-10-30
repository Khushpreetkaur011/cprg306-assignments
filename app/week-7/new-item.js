"use client";

import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [quantity, setQuantity] = useState(1);

  const generateId = () => {
    const characters = '0123456789abcdef';
    let result = '';
    const length = 8;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id: generateId(),
      name,
      category,
      quantity,
    };

    onAddItem(item);

    setQuantity(1);
    setName("");
    setCategory("produce");
  };

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

  return (
    <div className="flex flex-col space-y-4 text-gray-900">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex">
          <label htmlFor="name" className="sr-only">Item Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="p-2 border rounded w-full"
            placeholder="Item name"
            autoComplete="name"
          />
        </div>

        <div className="flex space-x-4 items-center">
          <div className="bg-white shadow-md rounded-lg p-2 w-64 flex items-center justify-between">
            <div className="text-2xl font-bold">{quantity}</div>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={decrement}
                disabled={quantity === 1}
                className={`px-4 py-0 border rounded bg-blue-500 hover:bg-blue-600 ${
                  quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                -
              </button>

              <button
                type="button"
                onClick={increment}
                disabled={quantity === 20}
                className={`px-4 py-0 border rounded bg-green-500 hover:bg-green-600 ${
                  quantity === 20 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="category" className="sr-only">Category</label>
            <select
              title='category'
              id="category" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="p-3 w-64 border rounded"
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
        </div>

        <div className="flex">
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewItem;
