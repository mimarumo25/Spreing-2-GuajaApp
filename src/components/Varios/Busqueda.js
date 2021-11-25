import React from 'react'
import { useNavigate } from 'react-router'
import { FormStyle, ImgLupa, SearcherStyle } from '../../styles/template'


export default function Busqueda({buscar, handleCancel, handleName}) {

    const navegator = useNavigate();
    const handleNavegar =()=>{
        navegator("/Buscador")
    }
        return (
            <div>
                <FormStyle>
    
                    <ImgLupa src="https://i.imgur.com/ooNjXdu.png" alt="Lupa" />
                    <SearcherStyle type="text" placeholder="Sabor de Guajolota, bebida..." onClick={handleNavegar} onChange={handleName}/>
                   
                </FormStyle>
            </div>
        )
    
    
}
