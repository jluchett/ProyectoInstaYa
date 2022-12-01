import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Forgot from "../components/forgot";
import Listado from "../components/Listado";
import Crear from "../components/Crear";

function App() {
  const [dbUser, setDbUser] = useState([])
  const [db, setDb] = useState([]);

  useEffect(() => {
    obtenerEnvios();
    obtenerUsuarios();
  }, []);

  function obtenerEnvios() {
    fetch("/api/envios")
      .then((res) => res.json())
      .then((data) => {
        console.log("componente montado");
        console.log(data);
        setDb(data);
      });
  }

  function obtenerUsuarios() {
    fetch("/api/usuarios")
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos usuarios obtenidos");
        console.log(data);
        setDbUser(data)
      });
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login datos={dbUser} data={db} />} />
          <Route path="/Login" element={<Login datos={dbUser} data={db}/>} />
          <Route path="/Registro" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/listado" element={<Listado data={db} />} />
          <Route path="/crear" element={<Crear />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
