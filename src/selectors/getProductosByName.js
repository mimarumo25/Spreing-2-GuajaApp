export const getProductossByName = (sabor, datos, cat) => {

  return datos.find((p) => p.sabor === sabor && p.categoria == cat);
};
