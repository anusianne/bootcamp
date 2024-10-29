import { useState } from "react";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
import { v4 as uuid } from "uuid";

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: uuid(), product: "Bananas", quantity: 8 },
    { id: uuid(), product: "Eggss", quantity: 20 },
  ]);
  const addItem = (item) => {
    setItems((currItems) => {
      return [...currItems, { ...item, id: uuid() }];
    });
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product} - {i.quantity}
          </li>
        ))}
      </ul>
      <ValidatedShoppingListForm addItem={addItem} />
    </div>
  );
}
