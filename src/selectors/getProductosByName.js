
export const getProductossByName = ( name = '',datos ) => {

   
    return datos.filter( p => p.name.includes( name ));

}