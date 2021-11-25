import carrito from '../../images/shopping-cart.svg'


import React from 'react'
import { Carritotemplate } from '../../styles/template'



export default function LogoCarrito({handleCarrito}) {
    return (
        <div>
            <Carritotemplate src={carrito} alt="carrito" onClick={handleCarrito}/>
        </div>
    )
}
