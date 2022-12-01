import React from 'react'
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./app.css";
import BarraNavegacion from "./Navbar";

import ListaRow from './listaRow';

const titulos = [
  "Item",
  "Fecha de creación",
  "Destinatario",
  "Dirección de entrega",
  "Ciudad de entrega",
  "Estado",
];


  
export default function Listado({data}) {
  
  return (
    <>
      <BarraNavegacion menu1="Cerrar sesion" menu2="Registrar orden" />
      <Container className="tabla">
        <div>
          <h2 id="titles">Listado de Ordenes</h2>
          <Table >
            <thead>
              <tr>
                {titulos.map((titulo, index) => {
                  return (
                    <th key={index} scope="col">
                      {titulo}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="3">No hay datos de envios</td>
                </tr>
              ):(
                data.map((el,index) => (
                  <ListaRow 
                  key={el._id}
                  el={el}
                  indice={index}
                  />
                ))
              )}
              
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
