import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    return(
        <div>
<h3>The current count is {count}</h3>
   <button onClick={() => setCount(count + 1)}>Increase Count</button>
   {/* can also be written as setCount{preState => prevState + 1} */}
        </div>
)
}
