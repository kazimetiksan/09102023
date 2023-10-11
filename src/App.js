import './App.css';

import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'

// Functional Component

import Home from './Home';
import Detail from './Detail';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view/:_id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
