import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl">List</h1>
      <div className="">
        <List item={"Coffee"} />
        <List item={"Tea"} />
        <List item={"Beer"} />
      </div>

      <h1 className="text-3xl">Button</h1>
      <Button count={count} setCount={setCount} />
      <p className="m-3">Button pressed: {count} times</p>
    </>
  );
}

export default App;
