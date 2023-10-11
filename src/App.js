import './App.css';

import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'

// Functional Component

import Home from './Home';
import Detail from './Detail';
import NotFound from './NotFound';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view/:_id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
