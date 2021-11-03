import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
          <option value="All" onClick={all}>Filter by category</option>
          <option value="Produce" onClick={produce}>Produce</option>
          <option value="Dairy" onClick={dairy}>Dairy</option>
          <option value="Dessert" onClick={dessert}>Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
