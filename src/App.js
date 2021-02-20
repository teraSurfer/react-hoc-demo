import Child from "./Child";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>HOC example</h1>
      <Child hello={"hello"} />
    </div>
  );
}
