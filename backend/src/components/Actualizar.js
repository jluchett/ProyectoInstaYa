import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import BarraNavegacion from "./Navbar";

export default function Actualizar({ data }) {
  const [form, setForm] = useState({
    fecha_crea: data[0].fecha_crea,
      hora_crea: data[0].hora_crea,
      nom_destinatario: data[0].nom_destinatario,
      ced_destinatario: data[0].ced_destinatario,
      dir_entrega: data[0].dir_entrega,
      ciudad_entrega: data[0].ciudad_entrega,
      estado: data[0].estado,
      largo: data[0].largo,
      ancho: data[0].ancho,
      alto: data[0].alto,
      peso: data[0].peso,
      dir_recogida: data[0].dir_recogida,
      ciudad_recogida: data[0].ciudad_recogida,
      id_cliente: data[0].id_cliente,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/envios/${data[0]._id}`, {
      method: "PUT",
      body: JSON.stringify({
        fecha_crea: form.fecha_crea,
        hora_crea: form.hora_crea,
        nom_destinatario: form.nom_destinatario,
        ced_destinatario: form.ced_destinatario,
        dir_entrega: form.dir_entrega,
        ciudad_entrega: form.ciudad_entrega,
        estado: form.estado,
        largo: form.largo,
        ancho: form.ancho,
        alto: form.alto,
        peso: form.peso,
        dir_recogida: form.dir_recogida,
        ciudad_recogida: form.ciudad_recogida,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Envio actualizado");
      })
      .catch((error) => console.error(error));
      
  };
  return (
    <>
    <BarraNavegacion menu1="Listado"/>
      <Container className="crear">
        <Row>
          <Form onSubmit={handleSubmit}>
            <h2>Registro de Ordenes - Actualizar</h2>
            <hr />

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="label">Fecha de Inicio</Form.Label>
                <Form.Control 
                type="date" 
                name="fecha_crea"
                value={form.fecha_crea}
                onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Hora</Form.Label>
                <Form.Control 
                type="time"
                name="hora_crea"
                value={form.hora_crea}
                onChange={handleChange}
               />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formGridAddress1"
              >
                <Form.Label>Estado</Form.Label>
                <Form.Select 
                id="estadoguardado"
                name="estado"
                value={form.estado}
                onChange={handleChange}
                >
                  <option>{form.estado}</option>
                  <option id="estadoguardado">Guardado</option>
                  <option id="estadocancelado">Cancelado</option>
                  <option id="estadocumplido">Cumplido</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-4" id="columna">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Largo</Form.Label>
                <Form.Control
                type="text"
                name="largo"
                value={form.largo}
                onChange={handleChange}
                placeholder="cm" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Ancho</Form.Label>
                <Form.Control 
                type="text"
                name="ancho"
                value={form.ancho}
                onChange={handleChange}
                placeholder="cm" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Alto</Form.Label>
                <Form.Control 
                type="text"
                name="alto"
                value={form.alto}
                onChange={handleChange}
                placeholder="cm" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Peso</Form.Label>
                <Form.Control 
                type="text"
                name="peso"
                value={form.peso}
                onChange={handleChange}
                placeholder="kg" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Direccion de Recogida</Form.Label>
                <Form.Control 
                type="text"
                name="dir_recogida"
                value={form.dir_recogida}
                onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Ciudad de Recogida</Form.Label>
                <Form.Control 
                type="text" 
                name="ciudad_recogida"
                value={form.ciudad_recogida}
                onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Nombre del Destinatario</Form.Label>
                <Form.Control 
                type="text"
                name="nom_destinatario"
                value={form.nom_destinatario}
                onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Cedula/Nit del Destinatario</Form.Label>
                <Form.Control 
                type="text"
                name="ced_destinatario"
                value={form.ced_destinatario}
                onChange={handleChange}
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
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Ciudad de Entrega</Form.Label>
                <Form.Control 
                type="text"
                name="ciudad_entrega"
                value={form.ciudad_entrega}
                onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <br />
            <Button variant="primary" type="submit" className="button">
              Actualizar Orden
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}
