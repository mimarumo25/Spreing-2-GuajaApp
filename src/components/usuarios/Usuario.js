import React, { Component, useContext } from 'react'
import { useNavigate } from 'react-router';
import Cookies from 'universal-cookie';
import FormLogin from './FormLogin';

const cookies = new Cookies();
export  default function Usuario() {
    
    const navigator = useNavigate();
        //const {user} = useContext(UserContext);

    if (JSON.parse(localStorage.getItem('seccionAppguajoapp'))) {
         let nombre = cookies.get('name');
        return (
            <div>
                <h3 className="text-center">Bienvenido</h3>
                <h5 className="text-center">{nombre}</h5>
                {navigator("/Pago")}
            
            </div>
        )
    } else {
        return (
           <>
           <FormLogin></FormLogin>
          
           </>
        )
    }
}
    

