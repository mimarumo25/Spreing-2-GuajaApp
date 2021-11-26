import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/productos/Home";
import Detalleproducto from "../components/productos/detalleProducto/DetalleProducto";
import GlobalStyle from "../globalstyles/Globalstyle";
import Carrito from "../components/Carrito/Carrito";
import { productos } from "../helpers/url";
import axios from "axios";
import FormRegistro from "../components/usuarios/FormRegistro";
import Pago from "../components/pago/Pago";
import FormLogin from "../components/usuarios/FormLogin";
import Buscador from "../components/buscador/Buscador";
import '../styles/prueba.css'



export const ProductosContext = createContext({  
  productosCarrito: [],
  setProductosCarrito: () => null,
  datos:[],
  setDatos:()=>null
});

export default function AppRouter() {

  const [productosCarrito, setProductosCarrito] = useState([])
  const [datos, setDatos] = useState([])
  
  const contextData = { 
      productosCarrito,
      setProductosCarrito,
      datos,
      setDatos
   }  
   useEffect(() => {
    obtenerOfertas()
}, [])
const obtenerOfertas = async() => {

   await axios.get(productos)
        .then((resp) => {
            setDatos(resp.data)
        })
        .catch((error) => {
            console.log(error);
        });

}

   
  return (
    <ProductosContext.Provider value={contextData}>
      <BrowserRouter>        
        <Routes>
            <Route exact path="/" element={<Home categoria ={"guajolotas"}/>} />
            <Route exact path="/Pago" element={<Pago />} />
            <Route exact path="/Guajalotas" element={<Home  categoria ={"guajolotas"}/>} />
            <Route exact path="/Bebidas"  element={<Home categoria ={"bebidas"}/> } />
            <Route exact path="/Tamales"  element={<Home categoria ={"tamal"}/>} /> 
            <Route exact path="/Carrito" element={<Carrito />} /> 
            <Route exact path="/Registro" element={<FormRegistro />} /> 
            <Route exact path="/Login" element={<FormLogin />} /> 
            <Route exact path="/Buscador" element={<Buscador/>}/>
            <Route exact path="/:producto/:id" element={<Detalleproducto />} />           
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ProductosContext.Provider>
  );
}
