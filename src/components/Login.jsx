import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
export const Login = () => {
  const { loginUser } = useUser();
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState({ correo: "", password: "" });
  const login = (e) => {
    e.preventDefault();
    loginUser(dataUser, navigate);
  };

  const handleChange = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="container text-center">
              <i className="fas fa-user fa-5x"></i>
            </div>
            <div className="card-header text-center">
              <h4>Inicio de sesion de Profesor </h4>
            </div>
            <div className="card-body">
              <form onSubmit={login}>
                <div className="mb-3">
                  <label className="form-label"> Correo</label>
                  <input
                    type="email"
                    name="correo"
                    className="form-control"
                    autoFocus
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label"> Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <button type="submit" className="form-control btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
