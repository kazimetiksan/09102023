import './App.css';

import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'

// Functional Component

import Home from './Home';
import Detail from './Detail';
import NotFound from './NotFound';

import {
  Provider
} from 'react-redux'

import {
  store
} from './redux/store'

import SignUp from './SignUp';
import SignIn from './SignIn';

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/view/:_id' element={<Detail />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
