import Navbar from "./components/Navbar/Navbar";
import UserRoutes from "./UserRoutes";

import "./shared/styles/style.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserRoutes />
    </div>
  );
}

export default App;
