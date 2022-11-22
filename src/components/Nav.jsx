import React from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const Nav = () => {
  const { user, exit } = useUser();
  console.log("estes es el usaurio", user);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Inicio
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-controls="navbarNav"
          data-target="#navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {user.login ? (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/students">
                  <i className="fas fa-user"> BIENVENIDO {user.name}</i>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/registerstudents">
                  <i className="fas fa-user-plus"> Registrar Estudiante</i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={() => exit()}>
                  <i className="fas fa-times"> SALIR</i>
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/registerteacher">
                  <i className="fas fa-user-plus"> Registrar Profesor</i>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
