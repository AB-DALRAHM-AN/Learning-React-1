import "./App.css";

function App() {
  const name = "Abdo";
  function readName(name) {
    if (name) {
      return <h1>Hello, {name}</h1>;
    } else {
      return <h1>Hello, Stranger</h1>;
    }
  }
  return <div className="App">
    <h1>Hello, {name}</h1>
    {readName(name)}
  </div>;
}

export default App;
