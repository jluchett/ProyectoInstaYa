import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./Login.css";
import BarraNavegacion from "./Navbar";
import { Link } from "react-router-dom";

const titulos = [
  "Codigo",
  "Fecha de creación",
  "Destinatario",
  "Dirección de entrega",
  "Ciudad de entrega",
  "Estado",
  "Acción",
];

const datos = [
  {
    cod: "AB54X0",
    fecha_crea: "24 Marzo 2022",
    para: "Jorge Luchetta",
    dir_entrega: "Cra 25 a # 53 D - 100",
    ciudad_entrega: "Barranquilla",
    estado: "Guardado",
  },
  {
    cod: "CG327H",
    fecha_crea: "1 Agosto 2022",
    para: "Jose Benites",
    dir_entrega: "Calle 12 # 24-35",
    ciudad_entrega: "Cartagena",
    estado: "Cumplido",
  },
  {
    cod: "R7JL18S",
    fecha_crea: "10 Octubre 2022",
    para: "Carlos Vives",
    dir_entrega: "Calle 1 # 2-3",
    ciudad_entrega: "Santa Marta",
    estado: "Cancelado",
  },
];
export default function Listado() {
  return (
    <>
      <BarraNavegacion menu1="Cerrar sesion" menu2="Registrar orden" />
      <Container className="tabla">
        <div>
          <h2>Listado de Ordenes</h2>
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
              {datos.map((dato) => {
                return (
                  <tr key={dato.cod}>
                    <td>{dato.cod}</td>
                    <td>{dato.fecha_crea}</td>
                    <td>{dato.para}</td>
                    <td>{dato.dir_entrega}</td>
                    <td>{dato.ciudad_entrega}</td>
                    <td id={"estado" + dato.estado}>{dato.estado}</td>
                    <td className="d-flex gap-2 justify-content-center">
                      {dato.estado == "Guardado" ? (
                        <Link className="btn btn-danger btn-sm" to={""}>
                          Cancel
                        </Link>
                      ) : (
                        <Link className="btn btn-success btn-sm" to={""}>
                          Consult
                        </Link>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
