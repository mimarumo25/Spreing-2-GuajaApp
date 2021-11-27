import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ProductosContext } from '../../routes/AppRouter';
import { getProductosName } from '../../selectors/getProdcutoName';

import { ButonBuscar, FormStyle, ImgLupa, SearcherStyle, Tarjetasestilo } from '../../styles/template';
import Cardsproductos from '../productos/CardsProductos';
import buscador from '../../images/Buscar.png'




const Buscador = () => {
    const { datos } = useContext(ProductosContext);
    const navegator = useNavigate();
   
    const [name, setName] = useState({
        name:'',
    })
    const [busc, setBusc] = useState(datos);

    const handleCancel = () => {
        navegator("/")
    }
   
    
    const handleChange =  ({target}) => {
         setName({
          ...name,
          [target.name]: target.value
        })
       const data  = getProductosName(name.name, datos)
     if(name.name=''){
           setBusc(datos)
       } else{
        setBusc(data)
       }
    
    }   
    
    return (
        <div>
            <FormStyle>
                <ImgLupa src="https://i.imgur.com/ooNjXdu.png" alt="Lupa" />
                <SearcherStyle 
                type="text" 
                placeholder="Sabor de Guajolota, bebida..."
                name="name"
                onChange={handleChange}  />
                <ButonBuscar onClick={handleCancel}>Cancelar</ButonBuscar >
            </FormStyle>
            {
                <div>
                    {busc.length >0?
                        busc.map((dat) => (
                            <Tarjetasestilo key={dat.id} >
                                <Link className="link" to={`/${dat.categoria}/` + dat.id} >
                                    <Cardsproductos data={dat} />
                                </Link>
                            </Tarjetasestilo>
                        ))
                        :<div className="text-center mt-5">
                            
                            <img src={buscador} alt="Logo No hay resultados" className="mt-5"/>
                           
                        </div>

                    }
                </div>
            }
        </div>
    );
}

export default Buscador;
