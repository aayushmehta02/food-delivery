import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
  function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
      

      
      
    </div>
  );
}

export default App;
