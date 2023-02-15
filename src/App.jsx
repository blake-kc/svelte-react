import { useState, useRef, useLayoutEffect } from "react";
import Hello from "./Hello.svelte";

function generateSvelteComponent(Component) {
  return (props) => {
    const svelteRef = useRef();

    useLayoutEffect(() => {
      // remove svelte instance if exists
      while (svelteRef.current?.firstChild) {
        svelteRef.current.firstChild.remove();
      }

      new Component({
        target: svelteRef.current,
        props,
      });
    }, []);

    return <div ref={svelteRef}></div>;
  };
}

const SvelteHello = generateSvelteComponent(Hello);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <SvelteHello />
      <SvelteHello
        text="from react!"
        onClick={() => setCount((count) => ++count)}
      />
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
