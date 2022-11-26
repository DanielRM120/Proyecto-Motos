import React from "react";
import { useState } from "react";
import { userSignUp } from "../../api/userApi";
import InputRegister from "./InputRegister";

const RegisterForm = () => {
  //necesitamos un useState tipo objeto que tenga las mismas propiedades que los name de los inputs
  //nombre (name) de los inputs sean iguales a los que se colocan en el objeto
  const [inputs, setInputs] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:''
  });

  const {firstname, lastname, email, password} = inputs

  //Funcion manejadora para controlar los valores de los inputs del formulario
  const handleInputsForm = (e) => {
    //operador spreep es el ...inputs que lo que hace es hacer una clonacion del objeto
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  };

  // //funcion manejadora del formulario
   const handleOnSubmit = async ( e ) => {
    e.preventDefault(); //Evitamos que se autorecargue, para poder enviar los datos a la base de datos
  
    // Envio de datos al server
    // validacion de que los inputs no esten vacios
    if(!firstname || !lastname || !email || !password){
      alert('All inputs are required')
    }else{
      const result = await userSignUp(inputs) //llamamos a la api
      if(result.status){
        alert(result.message)
        //limpiamos el formulario
        setInputs( {
          firstname:'',
          lastname:'',
          email:'',
          password:''
        })
        setTimeout(() => {
          window.location.href = '/'},
          3000)
      } else {
        alert(result.message)
      }
    }
    }

  return (
    <>
      <div className="card-register3">
        <h2>Formulario de Registro</h2>

        {/* Inicio del formulario */}
        <form action="" onSubmit={handleOnSubmit}>
          <InputRegister title="First Name" type="text" name="firstname" value={inputs.firstname} handle={handleInputsForm}/>
          <InputRegister title="Last Name" type="text" name="lastname" value={inputs.lastname} handle={handleInputsForm}/>
          <InputRegister title="E-mail" type="email" name="email" value={inputs.email} handle={handleInputsForm}/>
          <InputRegister title="Password" type="password" name="password" value={inputs.password} handle={handleInputsForm}/>

          <br></br>
          <br></br>

          <div className="mx-auto">
            <button type="submit " className="btn btn-click">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
