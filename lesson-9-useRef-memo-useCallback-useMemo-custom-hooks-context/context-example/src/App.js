import LangContext from "./langContext";
import Main from "./modules/Main/Main";
import Navbar from "./modules/Navbar/Navbar";

function App() {
  return (
      <LangContext>
        <div className="App">
          <Navbar />
          <Main />
        </div>
      </LangContext>
  );
}

export default App;
