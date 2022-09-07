import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";

import menuItems from "./data/menuItems.json";
import { ThemeProvider } from "styled-components";

const addUserProps = {
  text: "Add user",
  type: "submit",
}

const theme = {
  mainColor: "green"
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header title="Welcome to site!" menuItems={menuItems} />
        <p><Button {...addUserProps} /></p>
        <Footer />
     </ThemeProvider>
    </div>
  );
}

export default App;
