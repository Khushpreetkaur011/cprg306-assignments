"use client";
import React, { useState } from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center space-x-4 mb-6">
        <p className="text-lg font-semibold">Sort by:</p>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <Item name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;


