import logo from './logo.svg';
import './App.css';

import Hello from './Hello'
import Button from './Button';

// Functional Component
const AppV0 = () => {

    const userInfo = {
      name: 'Mehmet Etiksan',
      city: 'Istanbul',
      age: 44
    }

    const {city} = userInfo // destructure

    return (
      <div className="App">
        <header className="App-header">
          <div>Merhaba {city}</div>
          {
            // conditional rendering
            userInfo.age > 40 ? (
              <div>Yaşı 40tan büyük</div>
            ) : (
              <div>Yaşı 40tan küçük</div>
            )
          }
          <Hello data={userInfo} /> {/* JSX */}
          <Button />
        </header>
      </div>
    );
  }

export default AppV0;
