import React, {useState} from "react";
import { Container, Button, Form } from "react-bootstrap";
import BarraNavegacion from "./Navbar";

const iniUser = {
  email: "",
  contrasena: "",
};

const Forgot = ({ data, obtUsers }) => {
  const [user, setUser] = useState(iniUser);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  function actualisarPass(id,nom,ape,nomUsu,mail) {
    fetch(`/api/usuarios/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        nombre: nom,
        apellido: ape,
        nombreusuario: nomUsu,
        email: mail,
        contrasena: user.contrasena
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        document.getElementById("estadoGuardado").innerText =
          "Password cambiado";
      })
      .catch((error) => console.error(error));
      obtUsers()
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    {
      document.getElementById("estadoGuardado").innerText = "";
    }
    {
      document.getElementById("estadoCancelado").innerText = "";
    }
    const actUser = data.find((el) => el.email == user.email);
    console.log(actUser);
    if (actUser) {
      actualisarPass(
        actUser._id,
        actUser.nombre,
        actUser.apellido,
        actUser.nombreusuario,
        actUser.email
        );
    } else {
      {
        document.getElementById("estadoCancelado").innerText = "Email invalido";
      }
    }
  };
  return (
    <div>
      <BarraNavegacion menu1="Login" />
      <Container className="crear">
        <h1 id="titles">Cambiar contraseña</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa email con que te registraste"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa una contraseña nueva"
              name="contrasena"
              value={user.contrasena}
              onChange={handleChange}
              required
            />
            <label id="estadoCancelado"></label>
            <label id="estadoGuardado"></label>
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Forgot;
