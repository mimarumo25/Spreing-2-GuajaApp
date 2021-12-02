import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Cookies from "universal-cookie";
import { ProductosContext } from "../../routes/AppRouter";
import Logo from "../Varios/Logo";
const cookies = new Cookies();
export const Respuesta = () => {
  const { productosCarrito, dataRes } = useContext(ProductosContext);
  const navigator = useNavigate()
  console.log(dataRes);
  let nombre = cookies.get("name");
  let direccion = cookies.get("direccion");
  let id = cookies.get("id");
  let total = 0;
  let subtotal = 0;
  productosCarrito.forEach((p) => {
    subtotal = p.precio * p.cantidad;
    total += subtotal;
  });

  const Total = styled.h3`
    text-align: end;
  `;
  const P = styled.p`
    text-align: center;
  `;
  const Div = styled.div`
    text-align: center;
  `;

  return (
    <div>
      <Logo />
      <Div>
        <h4>Id clente: {id}</h4>
        <h5>Nombre: {nombre}</h5>
        <h6>Direccion: {direccion}</h6>
        <h6>Id de Pago {dataRes.id}</h6>
        <h5>Productos</h5>
      </Div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>imagen</th>
            <th>Cant</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productosCarrito.map((p, i) => (
            <tr key={p.i}>
              <td>{p.nombre}</td>
              <td>
                <img
                  src={p.imagen}
                  className="img-responsive"
                  alt="Image"
                  height="40"
                  width="40"
                />
              </td>
              <td>{p.cantidad}</td>
              <td>$ {p.precio * p.cantidad} MXN</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Total>TOTAL: $ {total}</Total>
      <P>Gracias por su compra, que disfrute su pedido</P>
      <Button variant="secondary" onClick={() => window.print()}>
        Imprimir
      </Button>
      
        <Button className="mx-5" variant="warning" onClick={() => navigator("/")}>
          Volver
        </Button>
     
    </div>
  );
};
