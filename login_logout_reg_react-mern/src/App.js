import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
