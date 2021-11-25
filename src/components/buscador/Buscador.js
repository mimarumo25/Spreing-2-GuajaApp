import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ProductosContext } from '../../routes/AppRouter';
import { getProductossByName } from '../../selectors/getProductosByName';
import { ButonBuscar, FormStyle, ImgLupa, SearcherStyle, Tarjetasestilo } from '../../styles/template';
import Cardsproductos from '../productos/CardsProductos';




const Buscador = () => {
    const { datos } = useContext(ProductosContext);
    const navegator = useNavigate();
    const [datosb, setDatosB] = useState({})
    const [name, setName] = useState({
        name:'',
    })

    const handleCancel = () => {
        navegator("/")
    }
   
    
    const handleChange = async ({target}) => {
        await setName({
          ...name,
          [target.name]: target.value
        })
    }   
    //const { data } = getProductossByName(name, datos)
    //console.log(data);
    return (
        <div>
            <FormStyle>
                <ImgLupa src="https://i.imgur.com/ooNjXdu.png" alt="Lupa" />
                <SearcherStyle type="text" placeholder="Sabor de Guajolota, bebida..."    onChange={handleChange}  />
                <ButonBuscar onClick={handleCancel}>Cancelar</ButonBuscar >
            </FormStyle>
            {
                <div>
                    {
                        datos.map((dat) => (
                            <Tarjetasestilo key={dat.id} >
                                <Link className="link" to={`//` + dat.id} datos={dat}>
                                    <Cardsproductos data={dat} />
                                </Link>
                            </Tarjetasestilo>
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default Buscador;
