import React, { useState } from "react";
function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
      <div>
        <h2>Counter: {count}</h2>
        <button 
         type="button"
         className="btn btn-success m-1 "
         style={{ height: "fit-content", width: "100px", borderColor: "#d3d3d3" }}
        onClick={() => setCount(count + 1)}>Up</button>
        <button 
         type="button"
         className="btn btn-danger m-1 "
         style={{ height: "fit-content", width: "100px", borderColor: "#d3d3d3" }}
        onClick={() => setCount(count - 1)}>Down</button>
      </div>
    );  
}
export default Counter;