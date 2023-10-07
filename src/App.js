import "./App.css";
import greeting from "./components/Greeting";

function App() {
  const name = "abdo";
  function readName(name) {
    if (name) {
      return <h1>Hello, {name}</h1>;
    } else {
      return <h1>Hello, Stranger</h1>;
    }
  }
  return (
    <>
    <div className="App">
      {readName(name)}
    </div>
    <div className="name">
      <h1>{name}</h1>
    </div>
    <div className="greeting">
      {greeting()}
    </div>
    </>
  );
}

export default App;
