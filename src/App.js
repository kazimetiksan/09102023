import logo from './logo.svg';
import './App.css';

import Hello from './Hello'
import Button from './Button';
import List from './List';

import Demo from './Demo';

// Functional Component
const App = () => {

    return (
      <div className="App">
        <header className="App-header">
          <Demo />
        </header>
      </div>
    );
  }

export default App;
