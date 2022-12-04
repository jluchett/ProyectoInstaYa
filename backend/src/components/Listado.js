import React, {useState, useEffect} from 'react'
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

export default function Listado({datIdCli}) {
  const [newData, setNewData] = useState([])

  useEffect(() => {
    obtenerEnvios();
  }, []);

  function obtenerEnvios() {
    fetch("/api/envios")
      .then((res) => res.json())
      .then((data) => {
        console.log("obtener desde listado");
        console.log(data)
        
        setNewData(data)
        console.log(datIdCli)
        console.log(newData)
      });
  }
  let datosNew = newData.filter( el => el.id_cliente == datIdCli)
  console.log("datosNew")
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
              {datosNew.length === 0 ? (
                <tr>
                  <td colSpan="3">No hay datos de envios</td>
                </tr>
              ):(
                
                datosNew.map((el,index) => (
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
