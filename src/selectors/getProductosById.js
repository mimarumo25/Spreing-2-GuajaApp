
export const getProductosById = ( id, datos ) => {
   
    return datos.find(d => d.id == id );
}
