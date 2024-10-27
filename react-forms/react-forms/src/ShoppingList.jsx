import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: 1, product: "Bananas", qty: 8 },
    { id: 1, product: "Eggss", qty: 20 },
  ]);
  const addItem = (item) => {
    setItems((currItems) => {
      return [...currItems, { ...item, id: 9 }];
    });
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product} - {i.qty}
          </li>
        ))}
      </ul>
      <ShoppingListForm addItem={addItem} />
    </div>
  );
}
