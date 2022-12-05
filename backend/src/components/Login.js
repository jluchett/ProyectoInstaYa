import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./app.css";
import Listado from "./Listado";
import BarraNavegacion from "./Navbar";

const iniUser = {
  username: "",
  password: "",
};
let newData = [];
let iduser = "";
export default function Login({ datos, data, obtUser, obtEnv, editEnv }) {
  const [user, setUser] = useState(iniUser);

  const [valid, setValid] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const actUser = datos.find(
      (el) =>
        el.nombreusuario == user.username && el.contrasena == user.password
    );
    console.log(actUser);
    if (actUser) {
      console.log("Correcto puedes ingresar");
      setValid(true);
      obtUser(actUser._id);
      iduser = actUser._id;
      newData = data.filter((el) => el.id_cliente == actUser._id);
      {
        document.getElementById("estadoCancelado").innerText =
          "Correcto puedes ingresar";
      }
    } else {
      console.log("No puedes ingresar");
      {
        document.getElementById("estadoCancelado").innerText =
          "Datos incorrectos";
      }
    }
  };

  return (
    <>
      {valid ? (
        <Listado
          datIdCli={iduser}
          obtEnv={obtEnv}
          editEnv={editEnv}
        />
      ) : (
        <div>
          <BarraNavegacion menu1="Registrarse" />
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
                <label id="estadoCancelado"></label>
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
