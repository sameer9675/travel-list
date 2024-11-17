import { useState } from 'react'
import Logo from './Logo';
import Stats from './Stats';
import { PackingList } from './PackingList';
import Form from './Form';

// export default  -> it is functional component

//Array of object
const initalItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 12, packed: false }
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    //items.push(item) -> its wrong as in react its not allowed to mutate the state
    // so here using spread operator we have return the new array itself
    //alway remember when we are updating the value based on current value always use call back
    setItems(items => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id)); //using filter it return an array which does not have id 
  }

  function handleToogleItem(id) {
    setItems(items => items.map(item =>
      item.id === id ? { ...item, packed: !item.packed }
        : item
    )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm('Are you sure you want to delete all itme');

    confirmed && setItems(items => []);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToogleItem}
        onClearItem={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

//rest normal function use to just return the JSX  -> which are my different component