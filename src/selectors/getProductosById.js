
export const getProductosById = ( id, datos ) => {
   
    return datos.filter(d => d.id == id );
}
