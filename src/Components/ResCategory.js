import React, { useState } from "react";
import ItemList from "./ItemList";

function ResCategory({ category, index ,isVisible,indexFunction}) {
  

  
  const handleClick=()=>{
   console.log("clicked",indexFunction)
   isVisible ? indexFunction(null) : indexFunction(index)
  
  }

  return (
    <>
      <div className="accordin bg-gray-100 p-2 m-4 shadow-lg">
        <div className=" font-bold flex justify-between cursor-pointer" onClick={handleClick}>
          <div>
            {category.card.card.title}({category.card.card.itemCards.length})
          </div>
          <span>{isVisible? '⬆️': '⬇️'}</span>
        </div>
        {isVisible && (
          <ItemList key={index} itemCards={category.card.card.itemCards} />
        )}
      </div>
    </>
  );
}

export default ResCategory;
