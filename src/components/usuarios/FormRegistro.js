import {Button } from 'react-bootstrap';
import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { ButtonContainer, FormContainer, H1Text, ImgRow } from './FormRegistroStyles'
import { Link } from 'react-router-dom';
import { users } from '../../helpers/url';


const FormRegistro = () => {

  const [user, setUser] = useState({

    name: "",
    email: "",
    password: "",
    direccion: ""

  })

  const handleChange = ({target}) => {

    setUser({

      ...user,

      [target.name]: target.value

    })

  }

  const handleSubmit = e => e.preventDefault;

  const handleClick = async () => {

    await fetch(users,{

      method: "POST",

      body: JSON.stringify(user),

      headers:{

        "Content-Type": "application/json; charset=UTF-8"

      }

    })  

  }
  

  return (

    <FormContainer onSubmit={handleSubmit}>

      <Link to="/inicio-sesion">
      
        <ImgRow src="https://i.imgur.com/08IQPBc.png" alt="" />

      </Link>

      <H1Text>Crear Perfil</H1Text>

      <FloatingLabel
        controlId="floatingInput"
        label="Nombre completo"
        className="mb-3">

        <Form.Control 
          type="text"
          name="name"
          placeholder="Nombre completo"   
          className="inputFocus input rounded-pill"
          onChange={handleChange}/>

      </FloatingLabel>

      <FloatingLabel 
        controlId="floatingInput" 
        label="Correo electronico" 
        className="mb-3">

        <Form.Control 
          type="email"
          name="email"
          placeholder="Correo electronico" 
          className="inputFocus input rounded-pill"
          onChange={handleChange}/>

      </FloatingLabel>

      <FloatingLabel 
        controlId="floatingPassword" 
        label="Contraseña">

        <Form.Control 
          type="password"
          name="password"
          placeholder="Contraseña" 
          className="inputFocus input rounded-pill"
          onChange={handleChange}/>

      </FloatingLabel>
      <FloatingLabel 
        controlId="floatingInput" 
        label="Dirección">

        <Form.Control 
          type="text"
          name="direccion"
          placeholder="Dirección" 
          className="inputFocus input rounded-pill"
          onChange={handleChange}/>

      </FloatingLabel>

      <ButtonContainer>

        <Link to="/">

          <Button variant="success" type="submit" onClick={handleClick}>
            Crear
          </Button>

        </Link>

      </ButtonContainer>
      
    </FormContainer>

  )
}

export default FormRegistro
