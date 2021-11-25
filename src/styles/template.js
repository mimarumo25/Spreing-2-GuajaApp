import styled from "styled-components";

export const Logotemplate = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
`;

export const Carritotemplate = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  cursor: pointer;
`;
export const RouterCards= styled.div`
text-decoration: none;
`
export const FormStyle = styled.div`

  width: 312px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 35px;
  position: relative;
  display: flex;

`;

export const SearcherStyle = styled.input`

    width: 80%;
    height: 60px;
    border-radius: 30px;
    outline-width: 0;
    background-color: var(--color-gris);
    border-width: 0;
    font-family: "Inter Regular", sans-serif;
    font-size: 13px;
    padding-left: 50px;
    background-color:#E7E7E7;

`;
export const ButonBuscar = styled.button`
color: black;
border: 0px;
margin-right: -4px;
background-color:#F2F2F2;
font-size: 17px;
`

export const ImgLupa = styled.img`

  position: absolute;  
  top: 20px;
  left: 25px;

`;

export const Fondopantalla = styled.body`
 background-color: #D3C3ED;
` ;

export const Bannerstyle = styled.h4`
text-align: center;
font-size: 25px;
margin-top: 30px;
`

export const Navstyle = styled.nav`
.header{
    text-align: center;
    color: rgb(173, 69, 69);
    padding: 0.3%;
    font-size: 120%;
}

.header nav{
    display: inline-block;
    justify-content: center;
    padding-left:10%;
    padding-right:10%; 
}

.link{
    text-decoration: none;
    padding-right:10%; 
    font-size: 1.1rem;
    
}


.link:hover{
    color: tomato;
}
`

export const Guajolotastyle = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
text-decoration: none;

position: absolute;
width: 312px;
height: 592px;
left: 24px;
top: 431px;
`

export const Busquedastyle = styled.input`
 background-color: white;
    border: 2px solid  var(--primary-color);
    border-radius:50px;
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    color: black;
`
export const Botonbuscar = styled.button`
 background-color: white;
    border: 2px solid  var(--primary-color);
    border-radius:50px;
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    color: black;
`

export const Formulariostyle = styled.form`
   padding: 20px;
`

export const Imagenguajolota = styled.img`
    width: 80px;
    height: 80px;
    margin-left: -37px;

`
export const Nombre = styled.span`
width: 184px;
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 17px;
color: #0D0D0D;
margin-right: -54px;
margin-top: -1rem;
`

export const Precio = styled.p`
color:tomato;
font-size: 17px;
margin-top: 23px;
    margin-bottom: 3rem;
    padding-right: 46px;
`

export const Tarjetasestilo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px;
width: 312px;
height: 112px;
background: #FFFFFF;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;
margin:8px auto;
`

export const Descripciontarjeta = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding: 0px;

position: static;
width: 184px;
height: 46px;
left: 112px;
top: 33px;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 1;
margin: 0px 16px;
`
