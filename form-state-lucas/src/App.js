import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  function cadastro(event) {
    event.preventDefault();
    
    alert(`nome: ${nome}, email: ${email}`);

    return;
  }
  /*estado de dados*/
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="App">
      <form className='form' onSubmit={cadastro}>
        <h1>FORMULARIO HEHEHEHEH</h1>
        <input
          type='text'
          placeholder='DIGITE SEU NOME'
          required
          value={nome}
          onChange={(event)=>{setNome(event.target.value)}}
        />

        <input
          type='text'
          placeholder='DIGITE SEU EMAIL'
          required
          value={email}
          onChange={(event)=>{setEmail(event.target.value)}}
        />

        <input
          type='password'
          placeholder='DIGITE SUA SENHA'
          required
          value={senha}
          onChange={(event)=>{setSenha(event.target.value)}}
        />
        <button type='submit'> Cadastrar </button>
      </form>
    </div>
  );
}

export default App;
