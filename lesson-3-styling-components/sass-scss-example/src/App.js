import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";

import menuItems from "./data/menuItems.json";

import './shared/styled/style.scss';

const addUserProps = {
  text: "Add user",
  type: "submit",
}

function App() {
  return (
    <div className="App">
     <Header title="Welcome to site!" menuItems={menuItems} />
     <p><Button {...addUserProps} /></p>
     <Footer />
    </div>
  );
}

export default App;
