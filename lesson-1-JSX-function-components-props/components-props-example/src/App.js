import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import menuItems from "./data/menuItems.json";

function App() {
  return (
    <div className="App">
      <Header title="Home page" menuItems={menuItems} />
      <Footer copyright="copyright 2022" />
    </div>
  );
}

export default App;
