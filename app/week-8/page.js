"use client";

import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {

    const cleanedName = itemName.replace(/[^\w\s]/gi, '').split(",")[0].trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className='bg-slate-950'>
      <h1 className='font-bold text-3xl text-center m-3'>Shopping List</h1>
      <div className='flex gap-8'>
        <div>
        <NewItem onAddItem={handleAddItem} />
        <ItemList onItemSelect={handleItemSelect} items={items}/>
        </div>
        <div>
        <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
};

export default Page;


