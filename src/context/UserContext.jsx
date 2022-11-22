import axios from "axios";
import Swal from "sweetalert2";
import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();
const initialState = { login: false, token: "", name: "" };

export const UserProvider = (props) => {
  const [user, setUser] = useState(initialState);

  // Mantener la Sesion
  useEffect(() => {
    const initial = JSON.parse(localStorage.getItem("user"));
    initial ? initial.login && setUser(initial) : setUser(initialState);
  }, []);

  // logeo desde el backend
  const loginUser = async (dataUser, navigate) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/login",
        dataUser
      );
      if (data.ok) {
        const { token, nombre } = data.data;
        const userLogin = {
          login: true,
          token: token,
          name: nombre,
        };
        localStorage.setItem("user", JSON.stringify(userLogin));
        setUser(userLogin);
        navigate("/students");
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      if (!error.response.data.ok) {
        return Swal.fire({
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log("error en la funcion login", error.message);
    }
  };

  const registerUser = async (dataUser, navigate) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/register",
        dataUser
      );
      if (data.ok) {
        const userLogin = {
          login: true,
          token: data.data.token,
          name: data.data.nombre,
        };
        localStorage.setItem("user", JSON.stringify(userLogin));
        setUser(userLogin);
        navigate("/students");
        Swal.fire({
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      if (!error.response.data.ok) {
        return Swal.fire({
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log("error en la funcion register", error.message);
    }
  };

  const exit = () => {
    setUser(initialState);
    localStorage.removeItem("user");
  };

  const value = {
    loginUser,
    registerUser,
    user,
    exit,
  };
  return <UserContext.Provider value={value} {...props} />;
};

export function useUser() {
  const context = useContext(UserContext);
  console.log("usercontext", context);
  if (!context) {
    throw new Error("useUser error");
  }
  return context;
}

export default UserProvider;
