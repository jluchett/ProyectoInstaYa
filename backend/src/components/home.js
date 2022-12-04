import React from "react";
import { Link } from "react-router-dom";
import BarraNavegacion from "./Navbar";
import "./app.css";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <>
      <BarraNavegacion menu1="Registrarse" />
      <div className="principal">
        <div className="contenedor">
          <br />
          <h1>Bienvenido a instaYá</h1>
          <h5>Programe su envío rapidamente</h5>
          <br />
          <Link to="/login">
            <Button variant="primary">Iniciar sesion</Button>
          </Link>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Home;
