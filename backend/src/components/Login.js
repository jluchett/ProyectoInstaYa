import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./app.css";
import Listado from "./Listado";
import BarraNavegacion from "./Navbar";


const iniUser = {
  username: "",
  password: "",
};
export default function Login({datos,data}) {
  const [user, setUser] = useState(iniUser);

  const [valid, setValid] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datos[0].nombreusuario)
    console.log(datos[0].contrasena)
    if((datos[0].nombreusuario == user.username) && (datos[0].contrasena == user.password)){
      console.log("Correcto puedes ingresar")
      setValid(true)
      {document.getElementById("mensaje").innerText = "Correcto puedes ingresar"}
      {document.getElementById("btnIngre").innerText = "Ingresar"}
    }else{
      console.log("No puedes ingresar")
      {document.getElementById("mensaje").innerText = "Datos incorrectos"}
      {document.getElementById("btnIngre").innerText = ""}
    }
  };

  return (
    <> 
      {valid ? (
        
        <Listado data={data}/>
        
      ):(
      <div>
        <BarraNavegacion menu1="Registro" />
      <Container className="crear">
        <h1 id="titles">Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu username"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <label id="mensaje" ></label>
            <Link id="btnIngre" className='button' to="/listado" ></Link>
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button> 
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <NavLink to="/forgot">Olvido su contraseña</NavLink>
          </Form.Group>
        </Form>
      </Container>
      </div>
      
      )}
      
    </>
  );
}
