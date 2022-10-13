import './App.css';
import PostsSearch from './components/PostsSearch/PostsSearch';
import GlobalStyles from "./GlobalStyles";
import ColorPicker from './shared/components/ColorPicker/ColorPicker';

const options = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "purple", color: "#E91E63" },
]

function App() {
  return (
    <div className="App">
      <ColorPicker options={options} />
      <PostsSearch />
      <GlobalStyles />
    </div>
  );
}

export default App;
