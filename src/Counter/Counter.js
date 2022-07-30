import { useState } from "react";

function Counter() {
  const [count , setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="header-counter">Counter {count}</h1>
      <button data-testid="add-btn" onClick={()=>setCount(count + 1)}>ADD</button>
      <button data-testid="reduce-btn" onClick={()=> setCount(count - 1)}>REDUCE</button>
    </div>
  );
}

export default Counter;
