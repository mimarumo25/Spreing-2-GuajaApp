import React, { useContext } from 'react';
import { ProductosContext } from '../../../routes/AppRouter';
import { getProductosByCategory } from '../../../selectors/getProductosByCategory';
import { Cards, CardsBebidas, Contenido, DivDatos, ImagenCarde, Input, Small } from './CardsDetalleStyle';

const ComboDetalles = ({ categoria,  handlechange}) => {
  
  const { datos } = useContext(ProductosContext);
  const data = getProductosByCategory(categoria, datos);
 
  return (
   
  <Contenido>
      <h5>Guajolocombo</h5>
      <p>Selecciona la bebida que más te guste y disfruta de tu desayuno.</p>

      <CardsBebidas>
        {
          data.map((dat) => (
            <div key={dat.id} >
              <Cards>

                <ImagenCarde src={dat.imagen} alt={dat.nombre} />
                <Input
                  className="mx-3"
                  type="checkbox"
                  name="producto"
                  id={dat.id}
                  onChange={ handlechange}
                  />
                <DivDatos>
                  <p>{dat.nombre}<br /><Small>+ $ {dat.precio} MXN</Small></p>
                </DivDatos>

              </Cards>

            </div>
          ))
        }
      </CardsBebidas>
    
    </Contenido> 
  );
}

export default ComboDetalles;
