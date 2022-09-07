import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Button from "./components/Button/Button";
import TextField from "./components/TextField/TextField";

import menuItems from "./data/menuItems.json";


import './App.css';

const showModalProps = {
  text: "Show modal",
  type: "button",
};

const addUserProps = {
  text: "Add user",
  type: "submit",
}

function App() {
  return (
    <div className="App">
     <Header menuItems={menuItems} title={"Home page"}/>
     <p><Button {...addUserProps} /></p>
     <p><TextField placeholder="Enter name"/></p>
     <Footer />
    </div>
  );
}



export default App;
