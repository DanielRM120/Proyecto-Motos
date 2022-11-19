import React from 'react'
import { useState } from "react";

const LoginForm = () => {
  //para poder tener el control del input usuario debemos crear un useState
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  
  //aqui debo declarar una funcion handle o manejadora para el input usuario
  const handleUsuario = (e) => {
    setUsuario(e.target.value);
    console.log(usuario);
  };

  //manejadoras de lastname y email
  const handlePassword = ( { target } ) => {
    setPassword(target.value)
    console.log(password);
  };

  //funcion manejadora del boton
  const handleShowInfo = () => {
    alert(`Su usuario es ${usuario}`);
  };

  return (
    <>
      <div className="card card-register2">
        <h2>Datos de ingreso</h2>
        <br></br>

        <div className="d-grid gap-2 col-4 mx-auto">
          <label htmlFor="" className="form-label">
            Usuario :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="usuario"
            name="usuario"
            id="usuario"
            value={usuario}
            onChange={handleUsuario}
          />
        </div>
        <div className="d-grid gap-2 col-4 mx-auto">
          <label htmlFor="" className="form-label">
            Password :
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <br></br>
        <div class="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-click" onClick={ handleShowInfo }>
            Iniciar Sesion
          </button>
        </div>
        <br></br>
        
        <div class="d-grid">
          <button className="btn btn-link" onClick={ handleShowInfo }>
            Olvide mi password
          </button>
        </div>
        
        <br></br>
        <br></br>
        
        <div class="d-grid gap-2 col-3 mx-auto">
          <button className="btn btn-click2" onClick={ handleShowInfo }>
            Crear usuario
          </button>
        </div>
      </div>

    </>
  );
};

export default LoginForm