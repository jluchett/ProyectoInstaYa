import React, { useState, useEffect } from "react";
import { Container, Button, Col, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./app.css";
import BarraNavegacion from "./Navbar";

const iniForm = {
  fecha_crea: "",
  hora_crea: "",
  nom_destinatario: "",
  ced_destinatario: "",
  dir_entrega: "",
  ciudad_entrega: "",
  estado: "Guardado",
  largo: "",
  ancho: "",
  alto: "",
  peso: "",
  dir_recogida: "",
  ciudad_recogida: "",
  id_cliente: "",
};

export default function Crear({ idCliente, obtEnv, obtUser }) {
  const [form, setForm] = useState(iniForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      id_cliente: idCliente,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/envios", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Envio registrado")
        setForm(iniForm);
        console.log("Se guardo desde el compnente crear");
      })
      .catch((error) => console.error(error));
    obtEnv();
    obtUser(idCliente);
    console.log("final de handleSubmit");
  };

  return (
    <>
      <BarraNavegacion menu1="Cerrar sesion" />
      <Container className="crear">
        <Row>
          <Form onSubmit={handleSubmit}>
            <h2 id="titles">Registro de Ordenes - Recogida</h2>
            <hr />
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridDate">
                <Form.Label className="label">Fecha Creacion</Form.Label>
                <Form.Control
                  type="date"
                  name="fecha_crea"
                  value={form.fecha_crea}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="time"
                  name="hora_crea"
                  value={form.hora_crea}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-4" id="columna">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Largo</Form.Label>
                <Form.Control
                  type="number"
                  name="largo"
                  value={form.largo}
                  onChange={handleChange}
                  placeholder="cm"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Ancho</Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  name="ancho"
                  value={form.ancho}
                  onChange={handleChange}
                  placeholder="cm"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Alto</Form.Label>
                <Form.Control
                  type="number"
                  name="alto"
                  value={form.alto}
                  onChange={handleChange}
                  placeholder="cm"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Peso</Form.Label>
                <Form.Control
                  type="number"
                  name="peso"
                  value={form.peso}
                  onChange={handleChange}
                  placeholder="Kg"
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridDirRec">
                <Form.Label>Direccion de Recogida</Form.Label>
                <Form.Control
                  type="text"
                  name="dir_recogida"
                  value={form.dir_recogida}
                  onChange={handleChange}
                  placeholder="Coloque su dirección"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCiuRec">
                <Form.Label>Ciudad de Recogida</Form.Label>
                <Form.Control
                  type="text"
                  name="ciudad_recogida"
                  value={form.ciudad_recogida}
                  onChange={handleChange}
                  placeholder="Coloque su ciudad"
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridNomDes">
                <Form.Label>Nombre del Destinatario</Form.Label>
                <Form.Control
                  type="text"
                  name="nom_destinatario"
                  value={form.nom_destinatario}
                  onChange={handleChange}
                  placeholder="Coloque nombre"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridced">
                <Form.Label>Cedula/Nit del Destinatario</Form.Label>
                <Form.Control
                  type="text"
                  name="ced_destinatario"
                  value={form.ced_destinatario}
                  onChange={handleChange}
                  placeholder="Coloque cedula/Nit"
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Direccion de Entrega</Form.Label>
                <Form.Control
                  type="text"
                  name="dir_entrega"
                  value={form.dir_entrega}
                  onChange={handleChange}
                  placeholder="Coloque direccion entrega"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Ciudad de Entrega</Form.Label>
                <Form.Control
                  type="text"
                  name="ciudad_entrega"
                  value={form.ciudad_entrega}
                  onChange={handleChange}
                  placeholder="Coloque ciudad entrega"
                  required
                />
              </Form.Group>
            </Row>
            <br />
            <div className="btons">
              <Button variant="primary" type="submit">
                Crear Orden
              </Button>
              {"          "}
              <NavLink className="btn btn-primary" to={"/Listado"}>
                Listado de Ordenes
              </NavLink>
            </div>
          </Form>
        </Row>
      </Container>
    </>
  );
}
