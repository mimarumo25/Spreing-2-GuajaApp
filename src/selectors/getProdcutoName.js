export const getProductosName = ( name = '',datos ) => {

     name = name.toLowerCase();
    return  datos.filter( p => p.nombre.toLowerCase().includes( name )  );

}

