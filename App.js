import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>React Counter</h1>
      <p style={{ fontSize: "2rem" }}>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)} style={{ marginLeft: "10px" }}>
        +
      </button>
    </div>
  );
}

export default App;

