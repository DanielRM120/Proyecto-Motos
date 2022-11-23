import {
    createBrowserRouter,
    Route,
    createRoutesFromElements
  } from "react-router-dom";
import IndexApp from '../IndexApp'
import Home from '../Home/Home'
/* import Contador from "../components/Contador/Contador";
import Saludo from "../components/Saludo/Saludo"; */
import RegisterForm from "../components/RegisterForm/RegisterForm";
import LoginForm from "../components/LoginForm/LoginForm";
import User from "../User/User";
import Perfil from "../User/componentsUser/Perfil";
import Table from "../User/componentsUser/Table";
import SolicitudCitas from "../User/componentsUser/SolicitudCitas";

export const router = createBrowserRouter(
    createRoutesFromElements( [
        <Route path="/" element={ <IndexApp />}>,
            <Route index element={ <Home /> } />,
            {/* <Route path="/contador" element={ <Contador /> } />,
            <Route path="/saludo" element={ <Saludo /> } />, */}
            <Route path="/register" element={ <RegisterForm /> } />,
            <Route path="/login" element={ <LoginForm /> } />,
            <Route path="/user" element={ <User /> } />,
            {/* ///////////////////Navegacion Usuario////////////////////// */}
            <Route path="/perfil" element={ <Perfil />} />,
            <Route path="/agenda" element={ <Table />} />,
            <Route path="/cita" element={ <SolicitudCitas />} />,
        </Route>
        ]
    )
)

