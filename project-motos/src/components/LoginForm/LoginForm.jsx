import React from 'react'
import { useState } from "react";


const LoginForm = () => {
  //para poder tener el control del input usuario debemos crear un useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  //aqui debo declarar una funcion handle o manejadora para el input usuario
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  //manejadoras de lastname y email
  const handlePassword = ( { target } ) => {
    setPassword(target.value)
    console.log(password);
  };

  //funcion manejadora del boton
  const handleOnSubmit = (e) => {
      e.preventDefault(); //Evitamos que se autorecargue, para poder enviar los datos a la base de datos
      
      setTimeout(() => {window.location.href = '/perfil'})
    
    // if(!email || !password){
    //   alert('All inputs are required')
    // }else{
    //   const result = await userLogin(email) //llamamos a la api
    //   if(result.status){
    //     alert(result.message)
    //     //limpiamos el formulario
    //     setEmail( {
    //       email: ''
    //     })
    //     setPassword({
    //       password: ''
    //     })
    //     setTimeout(() => {
    //       window.location.href = '/perfil'},
    //       2000)
    //   } else {
    //     alert(result.message)
    //   }
    // }
  };

  return (
    <>
      <div className="card card-register2">
        <h2>Datos de ingreso</h2>
        <br></br>
        <form action="" onSubmit={handleOnSubmit}>
        <div className="">
          <label htmlFor="" className="form-label">
            E-mail:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="E-mail"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="">
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
        <div class="">
          <button type='submit' className="btn btn-click">
            Iniciar Sesion
          </button>
        </div>
        </form>
        <br></br>
        
        <div class="d-grid">
          <button className="btn btn-link" >
            Olvide mi password
          </button>
        </div>
        
        <br></br>
        <br></br>
        
        <div class="">
          <button className="btn btn-click2">
            Crear usuario
          </button>
        </div>
      </div>

    </>
  );
};

export default LoginForm