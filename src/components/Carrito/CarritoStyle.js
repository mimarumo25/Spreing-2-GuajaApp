import styled from "styled-components";

export const ImagenCarrito = styled.img`
    height: 52px;
    width: 56px;
`;
export const H3 = styled.h3`
    text-align:center;
    padding:20px;
`;
export const DivCarrito = styled.h5`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    width: 312px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;    
    justify-content: flex-start; 
`;
export const SmallCantidad = styled.small`
    padding: 0px 10px;
    font-size: 12px;
    color: #FA4A0C;
;
`;
export const H5 = styled.h5`
    padding: 0px 10px;
`;
export const PrecioCarrito = styled.p`
margin-left: auto;
padding-right:3px;
font-size: 1rem;
color: #FA4A0C;
line-height: 17px;
`;
export const DivCarritoTotal = styled.div`

    width: 312px;
    height: 53px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    margin: 16px 25px;    
`;
export const TotalPago = styled(DivCarritoTotal)`
    margin: 18px 0px;
`
export const Moneda = styled.h3`
color: #FA4A0C;
`;

export const BotonPago = styled.button`
    display: block;    
    width: 264px;
    height: 70px;
    background: #FA4A0C;
    color: #FFFFFF;
    border-radius: 40px;
    font-size: 20px;
    margin: 0 auto;
`;
export const ImagenCarroVacio = styled.img`
    width:70%;
    display: flex;
    margin: 0 auto;
    padding-top:80px;
`;

    export const CarroVacio = styled.p`
    text-align: center;
    font-size:20px;
    color:gray;
    `;
    export const ImgUdapteCar = styled.img`
    height: 62.3px;
    width: 66.3px;
    left: 0px;
    top: 1.7px;
    border-radius: 0px;

    `;
    export const HA5 = styled(H5)`
    margin-top: 12px;
    `
   /* export const ImgUdapteCarA =styled(ImgUdapteCar)`
    
    ` */
