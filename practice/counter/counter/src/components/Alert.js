import React from "react";

export default function Alert() {
    return (
        <div>
        <h1>Synthetic Events</h1>
        <button onClick={() => alert('You clicked me!')}>Click Me!</button>
        </div>
    )
}