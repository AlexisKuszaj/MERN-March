import React, { useState} from 'react';

export default function UseStateP() {
    const [title, setTitle] = useState('Title')
    return ( 
    <div>
    <h1>Using useState</h1>
    <h2>The title is: {title}</h2>
    <button onClick={() => setTitle('New Title')}>Change Title</button>
    </div>
)}