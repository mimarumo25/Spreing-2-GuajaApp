import { Link,useNavigate } from "react-router-dom";
import { Tarjetasestilo } from "../../styles/template";
import '../../styles/prueba.css';
import { Navbar } from "../Navbar";
import Logo from "../Varios/Logo";
import LogoCarrito from "../Varios/LogoCarrito";
import Banner from "../Varios/Banner";
import Busqueda from "../Varios/Busqueda";
import Cardsproductos from "./CardsProductos";
import { ProductosContext } from "../../routes/AppRouter";
import { useContext } from "react";
import { getProductosByCategory } from "../../selectors/getProductosByCategory";

export function Home({ categoria }) {

  const { datos } = useContext(ProductosContext);

  const data = getProductosByCategory(categoria, datos);
  const gotoCarrito = useNavigate();
  const handleCarrito = () => {
    gotoCarrito("/Carrito")
}
  if (data.length === 0) {
    return (
      <div>
        <Logo />
        <LogoCarrito  handleCarrito={handleCarrito}/>
        <Banner /><Busqueda /><Navbar />
        <h1>cargando ...</h1>
      </div>
    )

  }

  else {
    return (
      <div>
        <Logo /><LogoCarrito handleCarrito={handleCarrito} /><Banner /><Busqueda /><Navbar />
        <div>
          {
            data.map((dat) => (
              <Tarjetasestilo key={dat.id} >
                <Link className="link" to={`/${categoria}/` + dat.id} >
                  <Cardsproductos data={dat} />
                </Link>
              </Tarjetasestilo>
            ))
          }
        </div>
      </div>
    );
  }
}
