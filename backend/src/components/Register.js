import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BarraNavegacion from "./Navbar";

const initialForm = {
  nombre: "",
  apellido: "",
  nombreusuario: "",
  email: "",
  contrasena: "",
};
export default function Register({obtUsers}) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("/api/usuarios", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        alert("Usuario creado")
        setForm(initialForm)
      })
      .catch((error) => console.error(error));
    obtUsers()
  };

  return (
    <>
      <BarraNavegacion menu1="Login" />
      <Container className="crear">
        <h2 id="titles">Registro de Usuarios</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombres</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tus Nombres"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tus Apellidos"
              name="apellido"
              value={form.apellido}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu username"
              name="nombreusuario"
              value={form.nombreusuario}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              name="contrasena"
              value={form.contrasena}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Acepto la politica de privacidad de datos personales."
            />
          </Form.Group>
          <Button variant="primary" type="submit">
                Enviar
              </Button>
        </Form>
      </Container>
    </>
  );
}
