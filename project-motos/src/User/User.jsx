import React from "react";
import { Outlet } from "react-router-dom";
import NavBarUser from "./NavBarUser/NavBarUser";

const User = () => {
  return (
    <>
    <div className="flex">
      <NavBarUser />
      <div className="content">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default User;
