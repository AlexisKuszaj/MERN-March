import React, { useState } from 'react';
import './App.css';

function App() {

const [newItem, setNewItem] = useState('');
const [items, setItems] = useState([]);

function addItem() {
  
const item = {
  id: Math.floor(Math.random() * 1000),
  value: newItem
}
setItems(oldList => [...oldList, item]);
setNewItem("");

} 

const deleteItem = (id) => {
const newList = items.filter((item) => item.id !==id);
setItems(newList);
}



  return (
    <div className="App">
      <input type='text' placeholder='Add To-Do...' value={newItem} onChange ={ e => setNewItem(e.target.value)} />
      <button id='add' onClick={() => addItem()}>Add</button>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>{item.value} <input type='checkbox' checked={items.complete}/> <button id='delete' onClick = {() => deleteItem(item.id)}>Delete</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
