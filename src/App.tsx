import React from 'react';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import './App.css';
import Items from './models/item';
import ShoppingListForm from './components/ShoppingListForm';

function App() {
  const [items, setItems] = React.useState<Items[]>([]);

  const addItem = (product: string) => {
    if (!product) return;
    setItems([
      ...items,
      {
        id: Date.now(),
        name: product,
        quantity: Math.floor(Math.random() * 100),
      },
    ]);
  };

  // const items = [
  //   { id: 1, name: 'Lemon', quantity: 3 },
  //   { id: 2, name: 'Chicken Breast', quantity: 2 },
  //   { id: 3, name: 'Milk', quantity: 4 },
  // ];

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
