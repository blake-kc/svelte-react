import { useState, useRef, useLayoutEffect } from "react";
import Hello from "./Hello.svelte";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const svelteRef = useRef();

  useLayoutEffect(() => {
    // remove svelte instance if exists
    while (svelteRef.current?.firstChild) {
      svelteRef.current.firstChild.remove();
    }

    new Hello({ target: svelteRef.current });
  }, []);

  return (
    <div>
      <div ref={svelteRef}></div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
