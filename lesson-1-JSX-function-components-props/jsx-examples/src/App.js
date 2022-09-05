import "./App.css";
const title = "Home page";
const isLogged = true;
const userName = "Bob";
const lastName = "Frank";
const numbers = 1;
const arr = ["1", "Sink", "ooo"];
const obj = {
  cat: "cat",
  dog: "dog",
  pig: "pig",
};

function App() {
  return (
    <>
      <div>
        <header className="header">
          {title}
        </header>
        <p>{isLogged ? `${userName} ${lastName}` : "Please login"}</p>
        <p>numbers: {numbers}</p>
        <p>array: {arr}</p>
        <p>object: {JSON.stringify(obj)}</p>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" disabled />
      </div>
      <header className="header">
      Title
    </header>
  </>
  );
}

export default App;
