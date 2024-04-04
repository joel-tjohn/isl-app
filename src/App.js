import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Clubs from './components/Clubs';
import Add from './components/Add';
import Search from './components/Search';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/c' element={<Clubs/>}/>
        <Route path='/a' element={<Add/>}/>
        <Route path='/s' element={<Search/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
