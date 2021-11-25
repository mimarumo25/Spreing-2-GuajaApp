import React from 'react';
import {VectorStyle} from '../vector/VectorStyled';
import Vectorimg from '../../images/Vector.svg';
import { useNavigate } from 'react-router';

const Vertor = ({pago}) => {
    const navegar = useNavigate();
     if(pago ==="car"){
        return (
        
            <div>
                <VectorStyle src={Vectorimg} alt="Atras" onClick={() => navegar(-1)}/>
            </div>
        );   
     }else{
    return (
        
        <div>
            <VectorStyle src={Vectorimg} alt="Atras" onClick={() => navegar(-1)}/>
        </div>
    );
}
}

export default Vertor;
