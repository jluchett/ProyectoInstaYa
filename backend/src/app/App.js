import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Forgot from "../components/forgot";
import Listado from "../components/Listado";
import Crear from "../components/Crear";
import Home from "../components/home";

function App() {
  const [dbUser, setDbUser] = useState([])
  const [db, setDb] = useState([]);
  const [idCli, setIdCli] = useState("")
  const [newData, setNewData] = useState([]);

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
  
  function obtenerUsuario(id) {
    let cliente = dbUser.find(el => el._id == id)
    setIdCli(cliente._id)
    let arrayd = db.filter( el => el.id_cliente == cliente._id)
    setNewData(arrayd)
    console.log(idCli)
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Login datos={dbUser} data={db} />} /> */}
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login datos={dbUser} data={db} obtUser={obtenerUsuario}/>} />
          <Route path="/Registrarse" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/Listado" element={<Listado datIdCli={idCli} />} />
          <Route path="/crear" element={<Crear idCliente={idCli} obtEnv={obtenerEnvios} obtUser={obtenerUsuario}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
