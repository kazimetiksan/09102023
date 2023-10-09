import logo from './logo.svg';
import './App.css';

import Hello from './Hello'
import Button from './Button';

// Functional Component
const App = () => {

    const userInfo = {
      name: 'Mehmet Etiksan',
      city: 'Istanbul'
    }

    return (
      <div className="App">
        <header className="App-header">
          <div>Merhaba {userInfo.city}</div>
          <Hello data={userInfo} /> {/* JSX */}
          <Button />
        </header>
      </div>
    );
  }

export default App;
