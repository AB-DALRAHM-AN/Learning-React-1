import "./App.css";

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
    <div className="text">
      <h1>Hello, {name}</h1>
    </div>
    </>
  );
}

export default App;
