
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Main from './components/main'
import Navbar from './components/navbar/navbar.js';
import Empresa from './components/empresa'
import Contato from './components/contato';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>

          <Route index element={<Main/>}/>
          <Route path='/empresa' element={<Empresa/>}/>
          <Route path='/contato' element={<Contato/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
