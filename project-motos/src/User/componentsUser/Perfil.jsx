import React from "react";
import NavBarUser from "../NavBarUser/NavBarUser";
import { useState } from "react";

const Perfil = () => {
  //para poder tener el control del input usuario debemos crear un useState
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //aqui debo declarar una funcion handle o manejadora para el input usuario
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    console.log(firstname);
  };

  //manejadoras de lastname y email
  const handleLastName = ({ target }) => {
    setLastName(target.value);
    console.log(lastname);
  };

  //funcion manejadora del boton
  const handlePassword = ({ target }) => {
    setPassword(target.value);
    console.log(password);
  };

  const handleEmail = ({ target }) => {
    const { value } = target;
    setEmail(value);
    console.log(email);
  };

  //Botones de accion
  const handleUpdate = () => {
    alert("Se actualizo el perfil");
  };

  const handleDelete = () => {
    alert("Se elimino la cuenta");
  };

  return (
    <>
      <div className="flex">
        <NavBarUser />
        <div className="content">
          <div className="perfil">
            <h2>Perfil</h2>
            <br /><br />
            <div className="card-perfil">
              <div className="d-grid row-space gap-2 col-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Firstname"
                  name="firstname"
                  id="firstname"
                  value={firstname}
                  onChange={handleFirstName}
                />
              </div>
              <div className="d-grid gap-2 col-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Lastname"
                  name="lastname"
                  id="lastname"
                  value={lastname}
                  onChange={handleLastName}
                />
              </div>
            </div>
            <div className="card-perfil">
            <div className="d-grid gap-2 col-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div className="d-grid gap-2 col-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
            </div>
            <br /><br />
            <div className="card-perfil-botones">
              <div className="d-grid gap-2 col-3">
                <button className="btn btn-click" onClick={handleUpdate}>
                  Actualizar
                </button>
              </div>
              <div className="d-grid gap-2 col-3">
                <button className="btn btn-click" onClick={handleDelete}>
                  Eliminar
                </button>
              </div>
            </div>
            {/* <div className="d-grid gap-2 col-4 mx-auto">
                <label htmlFor="" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <br></br>
              <br></br>

              <div class="d-grid gap-2 col-3 mx-auto">
                <button className="btn btn-click" onClick={handleShowInfo}>
                  Enviar
                </button>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
