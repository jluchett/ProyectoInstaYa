import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import "./Login.css";
import BarraNavegacion from "./Navbar";

export default function Login() {
  return (
    <>
      <BarraNavegacion menu1="Registro" />
      <Container className="crear">
        <h1>Login</h1>
        <Form autoComplete="off">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
          <Button variant="primary" type="submit">
            <NavLink className='nav-link' to="/listado">Ingresar</NavLink>
          </Button>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <NavLink to="/forgot">Olvido su contraseña</NavLink>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
