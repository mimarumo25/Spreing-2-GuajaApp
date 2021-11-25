import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import LogoCarrito from '../../Varios/LogoCarrito';
import Vertor from '../../vector/Vertor';
import cantidadMas from '../../../images/mas.png'
import cantidadMenos from '../../../images/menos.png'
import {
    DetalleProductoDiv,
    DetalleProductoImg,
    NombreProducto,
    Precio,
    Cantidad,
    Sumar,
    ImagenDiv,
    CantidadNumer,
    BotonAdd
} from './DetalleStyle';
import Sabor from '../../../images/sabores/Sabores';
import ComboDetalles from './ComboDetalles';
import { ProductosContext } from '../../../routes/AppRouter'
import { getProductosById } from '../../../selectors/getProductosById';


const Detalleproducto = () => {
    //se realiza el fitro del producto producto 

    let productoSabor = false
    const [counter, setCounter] = useState(1);
    const { setProductosCarrito, datos } = useContext(ProductosContext);
    const gotoCarrito = useNavigate();

    let { id, producto } = useParams(); //parametros enviados por la url

    const [data] = getProductosById(id, datos); //filtro de la data por id dinamaico

    if (producto === "guajolotas") { //serie de if para validar que que producto debemos buscar

        productoSabor = true;
    }
    else if (producto === "tamal") {

        productoSabor = true;
    }

    const handleSumar = () => {
        setCounter(counter + 1)
    }
    const handleRestar = () => {
        if (counter === 0) {
            return
        }
        else {
            setCounter(counter - 1)
        }
    }

    //Enviamos los datos al carrito
    const handleAddCar = (data, cant) => {
    
        setProductosCarrito(prevState => {
            const carrito = [...prevState]
            const existeProducto = carrito.some(item => item.id === data.id)
            if (!existeProducto) {
                return [...carrito, { ...data, cantidad: cant }]
            }
            return carrito.map(item => {
                if (item.id === data.id) {
                    const cantidad = item.cantidad || 0;
                    return { ...item, cantidad: cantidad + cant }
                }
                return { ...item }
            })
        })
        gotoCarrito("/Carrito")
    }

    const handlechange = (e) => {

        const activo = e.target.checked;
        if (activo) {
           let id = e.target.id
           const data = datos.find(d=>d.id==id)
           setProductosCarrito(prevState => {
            const carrito = [...prevState]
            const existeProducto = carrito.some(item => item.id === data.id)
            if (!existeProducto) {
                return [...carrito, { ...data, cantidad: 1 }]
            }
            return carrito.map(item => {
                if (item.id === data.id) {
                    const cantidad = item.cantidad || 0;
                    return { ...item, cantidad: cantidad  + 1}
                }
                return { ...item }
            })
        })          
         
        } else if (!activo) {
             
        }
    }



    const handleCarrito = () => {
        gotoCarrito("/Carrito")
    }

    if (productoSabor === true) {

        return (
            <div>
                <Vertor />
                <LogoCarrito handleCarrito={handleCarrito} />
                <DetalleProductoDiv>
                    <ImagenDiv>
                        <DetalleProductoImg src={data.imagen} alt={data.nombre} />
                    </ImagenDiv>
                    <NombreProducto>{data.nombre}</NombreProducto>
                    <Precio>$ {data.precio} {data.moneda}</Precio>
                    <Cantidad>
                        <Sumar onClick={handleRestar} src={cantidadMenos} alt='imagen' />
                        < CantidadNumer min="0">{counter}</CantidadNumer>
                        <Sumar onClick={handleSumar} src={cantidadMas} alt='imagen' />
                    </Cantidad>
                </DetalleProductoDiv>
                <div className="row">
                    <h5>Sabor</h5>
                    <div className="col" >
                        <img className="m-4" src={Sabor.rajas} alt='rojas' />
                        <img className="m-4" src={Sabor.verde} alt='verde' />
                        <img className="m-4" src={Sabor.mole} alt='mole' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img className="m-4" src={Sabor.guayaba} alt='guayaba' />
                        <img className="m-4" src={Sabor.pasas} alt='pasas' />
                        <img className="m-4" src={Sabor.piña} alt='piña' />
                    </div>
                </div>
                {<ComboDetalles categoria={"bebidas"} handlechange={handlechange} />}
                <BotonAdd type="button" onClick={() => handleAddCar(data, counter)}>{`Agregar ${counter} productos al carrito por valor $ ${counter * data.precio} MXN`}</BotonAdd>
            </div>
        )
    }
    if (producto === "bebidas") {
        return (
            <div>
                <Vertor />
                <LogoCarrito handleCarrito={handleCarrito}/>
                <DetalleProductoDiv>
                    <ImagenDiv>
                        <DetalleProductoImg src={data.imagen} alt={data.nombre} />
                    </ImagenDiv>
                    <NombreProducto>{data.nombre}</NombreProducto>
                    <Precio>{data.precio}</Precio>
                    <Cantidad>
                        <Sumar onClick={handleRestar} src={cantidadMenos} alt='imagen' />
                        < CantidadNumer min="0">{counter}</CantidadNumer>
                        <Sumar onClick={handleSumar} src={cantidadMas} alt='imagen' />
                    </Cantidad>
                </DetalleProductoDiv>
                <div className="row">
                    <h5>Sabor</h5>
                    <div className="col">
                        <img className="m-4" src={Sabor.arrozLeche} alt='sabores' />
                        <img className="m-4" src={Sabor.cafe} alt='sabores' />
                        <img className="m-4" src={Sabor.chocolate} alt='sabores' />
                    </div>
                </div>
                <ComboDetalles categoria={"guajolotas"} handlechange={handlechange}/>

                <BotonAdd type="button" onClick={() => handleAddCar(data, counter)}>{`Agregar ${counter} productos al carrito por valor $ ${counter * data.precio} MXN`}</BotonAdd>
            </div>
        );
    }
}
export default Detalleproducto;
