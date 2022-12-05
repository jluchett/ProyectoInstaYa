import React from "react";
import { Link } from "react-router-dom";

function ListaRow({ el, indice, editarEnvio }) {
  return (
    <>
      <tr>
        <td>
          <Link onClick={() => editarEnvio(el._id)} to={"/Actualizar"}>{indice + 1}</Link>
        </td>
        <td>{el.fecha_crea}</td>
        <td>{el.nom_destinatario}</td>
        <td>{el.dir_entrega}</td>
        <td>{el.ciudad_entrega}</td>
        <td id={"estado" + el.estado}>{el.estado}</td>
      </tr>
    </>
  );
}

export default ListaRow;
