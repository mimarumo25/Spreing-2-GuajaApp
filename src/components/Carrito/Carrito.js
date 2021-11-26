import React, { useContext, useState } from "react";
import { ProductosContext } from "../../routes/AppRouter";
import Vertor from "../vector/Vertor";
import {
  BotonPago,
  CarroVacio,
  DivCarrito,
  DivCarritoTotal,
  H3,
  H5,
  HA5,
  ImagenCarrito,
  ImagenCarroVacio,
  ImgUdapteCar,
  Moneda,
  PrecioCarrito,
  SmallCantidad,
} from "./CarritoStyle";
import CarritoLogo from "../../images/shopping-cart.svg";
import ActualizarCarrito from "./ActualizarCarrito";
import { useModal } from "../../hooks/useModal";
import cantidadMas from "../../images/mas.png";
import cantidadMenos from "../../images/menos.png";
import {
  Cantidad,
  CantidadNumer,
  Sumar,
} from "../productos/detalleProducto/DetalleStyle";
import { getProductosById } from "../../selectors/getProductosById";
import { useNavigate } from "react-router";
const Carrito = () => {
  const { productosCarrito, setProductosCarrito } =useContext(ProductosContext);
  const [productoActual, setProductoActual] = useState({});

  let total = 0;
  let subtotal = 0;
  const [isOpenModalActualizar, openModalActualizar, closeModalActualizar] =
    useModal(false);

  
  const navigator = useNavigate();

  const handleSumar = () => {
    setCounter(counter + 1);
  };
  const handleRestar = () => {
    if (counter === 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };
  const cantidad=()=>{
    setCounter(productoActual.cantidad);
    console.log(productoActual.cantidad);
  }
  const handleModal = (id) => {
    const data = getProductosById(id, productosCarrito);
   
    setProductoActual(data);
    cantidad() 
    openModalActualizar();
  };
  const [counter, setCounter] = useState();
  const guardarModal = (data, cant) => {
    setProductosCarrito((prevState) => {
      const carrito = [...prevState];
      const existeProducto = carrito.some((item) => item.id === data.id);
      if (!existeProducto) {
        return [...carrito, { ...data, cantidad: cant }];
      }
      return carrito.map((item) => {
        if (item.id === data.id) {
          return { ...item, cantidad: cant };
        }
        return { ...item };
      });
    });
    closeModalActualizar();
    setProductoActual(productosCarrito);
  };

  productosCarrito.forEach((p) => {
    subtotal = p.precio * p.cantidad;
    total += subtotal;
  });

  const handlePago = () => {
    if (JSON.parse(localStorage.getItem("seccionAppguajoapp"))) {
      navigator("/Pago");
    } else if (!JSON.parse(localStorage.getItem("seccionAppguajoapp")))
      navigator("/Login");
  };

  if (productosCarrito.length === 0) {
    return (
      <div>
        <Vertor />
        <H3>Carrito</H3>
        <ImagenCarroVacio src={CarritoLogo} alt="Carrito Vacio" />
        <CarroVacio>
          <b>No hay productos</b>
        </CarroVacio>
      </div>
    );
  } else {
  }
  return (
    <div>
      <Vertor />

      <H3>Carrito</H3>
      {productosCarrito.map((p, i) => (
        <div key={i}>
          <DivCarrito
            className="carritoProducto"
            id={p.id}
            onClick={() => handleModal(p.id)}
          >
            <ImagenCarrito
              src={p.imagen}
              alt={"Producto: " + p.categoria + " " + p.nombre}
            />
            <div>
              <H5>{p.nombre}</H5>
              <SmallCantidad>x {p.cantidad}</SmallCantidad>
            </div>
            <PrecioCarrito>
              {(subtotal = p.precio * p.cantidad)} {p.moneda}
            </PrecioCarrito>
          </DivCarrito>
        </div>
      ))}
      <DivCarritoTotal>
        <h2>
          <b>Total</b>
        </h2>
        <Moneda>
          $ {total} <span>MXN</span>
        </Moneda>
      </DivCarritoTotal>
      <BotonPago onClick={handlePago}>IR A PAGO</BotonPago>
      <ActualizarCarrito
        isOpen={isOpenModalActualizar}
        closeModal={closeModalActualizar}
        guardarModal={() => guardarModal(productoActual, counter) }
        counter={productoActual.cantidad}
      >
        <ImgUdapteCar src={productoActual.imagen} alt="imagen Producto" />
        <Moneda>
          $ {productoActual.precio} <span>MXN</span>
        </Moneda>
        <HA5>{productoActual.nombre}</HA5>
        <Cantidad>
          <Sumar onClick={handleRestar} src={cantidadMenos} alt="imagen" />
          <CantidadNumer min="0">{counter}</CantidadNumer>
          <Sumar onClick={handleSumar} src={cantidadMas} alt="imagen" />
        </Cantidad>
      </ActualizarCarrito>
    </div>
  );
};

export default Carrito;
