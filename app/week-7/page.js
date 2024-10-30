"use client";

import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

const Page = () => {
  const [items, setItems] = useState(itemsData);


  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-black pt-8">
      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-4">Shopping List</h1>
    
        <NewItem onAddItem={handleAddItem} />
      
        <ItemList items={items} />
      </main>
    </div>
  );
};

export default Page;
