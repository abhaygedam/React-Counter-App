import React, { useState } from 'react';

export default function Counter(prop) {

  const [count, setCount] = useState(0);

  const handleClick = (incr) => {
    setCount(count + incr);
    }
    
    const handleClickDouble = (doub) => {
        setCount(count * doub);
  }

    return (
        <div>
             <h2>Count :{count}</h2>
            <button onClick={() => { handleClick(prop.inc) }}>Add 1</button>
            <button onClick={() => { handleClick(prop.dec) }}>Reduce 1</button>
            <button onClick={() => { handleClickDouble(prop.double) }}>Double</button>
      </div>
    );
}
