import  { useState } from 'react'
import { FloatingLabel, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../Varios/Logo'
import { ButtonContainer, FormContainer, H1Text} from './FormLoginStyles'
import axios from 'axios';
import { users } from '../../helpers/url'
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { useNavigate } from 'react-router';

const cookies = new Cookies();

const FormLogin =()=> {
  const navigator = useNavigate();
  const [datos, setDatos] = useState({
    email: '',
    pass: ''
  })

  const handleChange = async ({target}) => {
    await setDatos({
      ...datos,
      [target.name]: target.value
    })
   
 
}

const iniciarSeccion = async () => {

  await axios.get(users, { params: { email: datos.email, pass: datos.pass } })
    .then(response => {
      return response.data;
    })
    .then(response => {
      if (response.length > 0) {
        let resp = response[0];
        cookies.set('id', resp.id, { path: "/" })
        cookies.set('name', resp.name, { path: "/" })
        cookies.set('email', resp.email, { path: "/" })
        localStorage.setItem('seccionAppguajoapp','true');
        alertify.notify('Seccion exitosa', 'success', 5, function () { console.log('dismissed'); });
        navigator('/Pago');
      } else {
        alertify.error('Usuario o la contraseña no son correctos.');
      }
    })
    .catch(error => {
      console.log(error);
    })
}



  return (

    <FormContainer  >

      <Link to="/">

        <Logo></Logo>

      </Link>

      <H1Text>Iniciar Sesión</H1Text>

      <FloatingLabel
        controlId="floatingInput"
        label="Correo electronico"
        className="mb-3">

        <Form.Control
          name="email"
          type="text"
          placeholder="Correo electronico"
          className="inputFocus input rounded-pill"
          onChange={handleChange} />

      </FloatingLabel>

      <FloatingLabel
        controlId="floatingPassword"
        label="Contraseña">

        <Form.Control
          name="pass"
          type="password"
          placeholder="Contraseña"
          className="inputFocus input rounded-pill"
          onChange={handleChange} />

      </FloatingLabel>

      <ButtonContainer className="d-grid gap-2">
        <Button variant="success" type="submit" className="margin" onClick={() => iniciarSeccion()}>Iniciar Seccion</Button>

        <h5>Si aun no se encuetra regitrado puede registrase en el siguiente Link<Link to="/Registro">
          <Button as="input" type="button" value="Registrarse" className="boton" />
        </Link></h5>


      </ButtonContainer>


    </FormContainer>

  )
}


export default FormLogin
  ;
