export const getProductosName = ( name = '',datos ) => {

console.log(name);
     name = name.toLowerCase();
    return  datos.filter( p => p.nombre.toLowerCase().includes( name )  );

}

