
export const getProductosByCategory = ( category, datos ) => {

    const validCategory = ['guajolotas', 'bebidas', 'tamal'];

    if ( !validCategory.includes( category ) ) {
        throw new Error(`La categoría "${ category }" no es correcto`);
    }

    return datos.filter( d => d.categoria === category );

}
