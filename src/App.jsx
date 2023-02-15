import { useRef, useLayoutEffect } from "react";
import Hello from "./Hello.svelte";
import useStore from "./store";

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
  const { count, increment } = useStore();

  return (
    <div>
      <SvelteHello />
      <SvelteHello text="from react!" onClick={increment} />
      <button className="btn btn-success" onClick={increment}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
