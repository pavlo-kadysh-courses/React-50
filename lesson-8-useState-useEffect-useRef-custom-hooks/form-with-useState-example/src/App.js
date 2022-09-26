import { Component } from 'react'
import Books from './components/Books/Books';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';


export default class App extends Component {
  state = {
    libraryOpen: true,
  };

  toggleLibState = () => {
    this.setState((prev) => {
      return {
        libraryOpen: !prev.libraryOpen,
      }
    })
  }

  render() {
    const { libraryOpen } = this.state;
    return (
      <div className="App">
        <button onClick={() => this.toggleLibState()}>{libraryOpen ? "Знищити стару бібліотеку" : "Створи нову бібліотеку"}</button>
        <ErrorBoundary>
          {libraryOpen && <Books />}
        </ErrorBoundary>
    </div>
    )
  }
}


