import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./components/List";
import Button from "./components/Button";
import Card from "./components/Card";
import johnDoeImg from "./assets/john-doe.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Liste */}
      <h1 className="text-3xl">List</h1>
      <div className="">
        <List item={"Coffee"} />
        <List item={"Tea"} />
        <List item={"Beer"} />
      </div>

      {/* Button */}
      <h1 className="text-3xl">Button</h1>
      <Button count={count} setCount={setCount} />
      <p className="m-3">Button pressed: {count} times</p>

      {/* Card */}
      <h1 className="text-3xl">Card</h1>
      <Card
        img={johnDoeImg}
        name={"John Doe"}
        occupation={"Architect & Engineer"}
      />
    </>
  );
}

export default App;
