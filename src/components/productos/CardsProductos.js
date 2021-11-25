import React from 'react';
import { Descripciontarjeta, Imagenguajolota, Precio,Nombre } from '../../styles/template';

const Cardsproductos = ({ data }) => {
    let { nombre, imagen, precio, moneda } = data;
    return (
        <div>
            <Imagenguajolota src={imagen} alt={nombre}/>
            <Descripciontarjeta>               
                <Nombre>{nombre} <Precio>$ {precio} {moneda}</Precio></Nombre>
                
            </Descripciontarjeta>
        </div>
    );
}

export default Cardsproductos;
