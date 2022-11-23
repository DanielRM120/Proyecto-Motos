import React from "react";
import NavItemsUser from "./NavItemsUser";

const NavBarUser = () => {
  const navItemsColumns = [
    { ruta: "/perfil", icono: "bi bi-person-workspace", texto: "Perfil" },
    { ruta: "/cita", icono: "bi bi-pencil-square", texto: "Solicitud de Citas" },
    { ruta: "/agenda", icono: "bi-layout-text-sidebar", texto: "Agenda" },
    // Tiene la misma ruta de home para salir del perfil
    { ruta: "/", icono: "bi bi-arrow-return-left", texto: "Salir" }
  ];

  return (
    <>
      <div className="navbaruser bg-dark navbar-dark">
          <ul className="navbar-nav">
            {/* usamos el metodo map en el array navItems para renderizar la barra de navegacion */}
            <NavItemsUser items={navItemsColumns} />
          </ul>
      </div>
    </>
  );
};

export default NavBarUser;
