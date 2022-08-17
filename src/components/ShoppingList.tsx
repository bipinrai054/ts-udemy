import React from 'react';
import Items from '../models/item';

interface ShoppingListProps {
  items: Items[];
}

function ShoppingList({ items }: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.name} -{i.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
