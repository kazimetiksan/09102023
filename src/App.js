import logo from './logo.svg';
import './App.css';

import Hello from './Hello'

// Functional Component
const App = () => {

    return (
      <div className="App">
        <header className="App-header">
          <Hello /> {/* JSX */}
        </header>
      </div>
    );
  }

export default App;
