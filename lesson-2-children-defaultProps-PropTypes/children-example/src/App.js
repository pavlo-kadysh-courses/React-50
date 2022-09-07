import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

function App() {
  return (
    <div>
      <Button><span>Title</span></Button>
      <Button>Info</Button>
      <Button>Warning</Button>
      <Button>Test</Button>
      <Card>
        <Button>Info</Button>
        <Button>Warning</Button>
        <Button>Test</Button>
      </Card>
      <Card>
      </Card>
    </div>
  );
}

export default App;
