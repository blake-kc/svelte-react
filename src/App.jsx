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

    new Hello({
      target: svelteRef.current,
      props: {
        text: "from react",
        onClick: () => alert("Click from react"),
      },
    });
  }, []);

  return (
    <div>
      <div ref={svelteRef}></div>
      <button
        className="btn btn-success"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
