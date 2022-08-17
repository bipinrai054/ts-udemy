import React from 'react';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import './App.css';
import Items from './models/item';

function App() {
  const [items, setItems] = React.useState<Items[]>([]);

  // const items = [
  //   { id: 1, name: 'Lemon', quantity: 3 },
  //   { id: 2, name: 'Chicken Breast', quantity: 2 },
  //   { id: 3, name: 'Milk', quantity: 4 },
  // ];

  return (
    <div>
      <h1>Hello</h1>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
