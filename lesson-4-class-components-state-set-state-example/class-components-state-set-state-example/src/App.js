import './App.css';
import Menu from './components/Menu/Menu';
import menuItems from './data/menuItems.json';

import ToggleButton from './components/ToggleButton/ToggleButton';
import Vote from './components/Vote/Vote';

function App() {
  return (
    <div className="App">
      <Menu menuItems={menuItems}/>
      <ToggleButton buttonText="Click me"/>
      <Vote />
    </div>
  );
}

export default App;
