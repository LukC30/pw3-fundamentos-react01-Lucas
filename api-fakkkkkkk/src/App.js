import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Users from './components/users';
import CreateUser from './components/createuser';
function App() {

 

  return (
    <div className="App">
    <CreateUser/>
    </div>
  );
}

export default App;
