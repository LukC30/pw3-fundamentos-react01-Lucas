import axios from "axios";
import { useState, useEffect } from "react";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  function createUser(event) {
    let user = JSON.stringify({name: name,job: job});

    axios.post("https://reqres.in/api/users", user)
      .then((response) => {
        alert(response);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }
  return (
    <form onSubmit={createUser} className="form">
      <h1>Formulario de cadastro</h1>
      <input
        type="text"
        placeholder="digite seu nome aqui"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="digite seu trabalho aqui"
        value={job}
        onChange={(event) => {
          setJob(event.target.value);
        }}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
