import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useEffect, useState } from 'react';
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
import { getProductossByName } from '../../../selectors/getProductosByName';


const Detalleproducto = () => {
    //se realiza el fitro del producto producto 

    let productoSabor = false
    const [counter, setCounter] = useState(1);
    const { setProductosCarrito, datos } = useContext(ProductosContext);
    let { id, producto } = useParams(); //parametros enviados por la url

    const [par, setPar] = useState(id)
    const dataId = getProductosById(par, datos); //filtro de la data por id dinamaico   
    const [data, setData] = useState(dataId)
    const gotoCarrito = useNavigate();
 
    if (producto === "guajolotas") { //serie de if para validar que que producto debemos buscar

        productoSabor = true;
    }
    else if (producto === "tamal") {

        productoSabor = true;
    }
    const handleImages = (sabor,cat) =>{
        const data = getProductossByName(sabor, datos,cat);
        setData(data)
       
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
                       
                        <img className={data.sabor ==="verde"?"activa m-4":"activeImage m-4"} src={Sabor.verde} alt='verde' onClick={()=>handleImages("verde",data.categoria)}/>
                        <img className={data.sabor ==="mole"?"activa m-4":"activeImage m-4"} src={Sabor.mole} alt='mole' onClick={()=>handleImages("mole",data.categoria)}/>
                        <img className={data.sabor ==="rajas"?"activa m-4":"activeImage m-4"} src={Sabor.rajas} alt='rajas' onClick={()=>handleImages("rajas",data.categoria)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img className={data.sabor ==="guayaba"?"activa m-4":"activeImage m-4"} src={Sabor.guayaba} alt='guayaba' onClick={()=>handleImages("guayaba",data.categoria)}/>
                        <img className={data.sabor ==="pasas"?"activa m-4":"activeImage m-4"} src={Sabor.pasas} alt='pasas' onClick={()=>handleImages("pasas",data.categoria)}/>
                        <img className={data.sabor ==="piña"?"activa m-4":"activeImage m-4"} src={Sabor.piña} alt='piña' onClick={()=>handleImages("piña",data.categoria)}/>
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
                        <Sumar onClick={handleRestar} src={cantidadMenos} alt='imagen menos' />
                        < CantidadNumer min="0">{counter}</CantidadNumer>
                        <Sumar onClick={handleSumar} src={cantidadMas} alt='imagen mas' />
                    </Cantidad>
                </DetalleProductoDiv>
                <div className="row">
                    <h5>Sabor</h5>
                    <div className="col">
                        <img className={data.nombre ==="Atole de Arroz con Leche"?"activa m-4":"activeImage m-4"}  src={Sabor.arrozLeche} alt='sabores' onClick={()=>handleImages("Atole de Arroz con Leche",data.categoria)}/>
                        <img className={data.nombre ==="Cafe Negro"?"activa m-4 ":"activeImage m-4"} src={Sabor.cafe} alt='sabores' onClick={()=>handleImages("cafe negro",data.categoria)}/>
                        <img className={data.nombre ==="Chocolate Caliente"?"activa m-4":"activeImage m-4"} src={Sabor.chocolate} alt='sabores' onClick={()=>handleImages("Chocolate Caliente",data.categoria)}/>
                        <img className={data.nombre ==="Champurrado"?"activa m-4":"activeImage m-4"} src={Sabor.champurrado} alt='sabores' onClick={()=>handleImages("Champurrado",data.categoria)}/>
                    </div>
                </div>
                <ComboDetalles categoria={"guajolotas"} handlechange={handlechange}/>

                <BotonAdd type="button" onClick={() => handleAddCar(data, counter)}>{`Agregar ${counter} productos al carrito por valor $ ${counter * data.precio} MXN`}</BotonAdd>
              </div>
        );
    }
}
export default Detalleproducto;
