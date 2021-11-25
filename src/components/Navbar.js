import React from 'react';
import { Link} from 'react-router-dom';
import { Navstyle } from '../styles/template';

export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <Navstyle>
                <Link className="link" to=""></Link>
                <Link className="link" to="/Guajalotas">Guajolotas</Link>
                <Link className="link" to="/Bebidas">Bebidas</Link>
                <Link className="link" to="/Tamales">Tamales</Link>
                </Navstyle>
                
            </div>
            
        </div>
    )
}
