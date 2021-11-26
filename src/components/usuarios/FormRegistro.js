import { Button } from "react-bootstrap";
import { FloatingLabel, Form } from "react-bootstrap";
import {
        ButtonContainer,
        FormContainer,
        H1Text
      } from "./FormRegistroStyles";
import { users } from "../../helpers/url";
import axios from "axios";
import { Formik } from "formik";
import Vertor from "../vector/Vertor";
import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';

const FormRegistro = () => {
  
  return (
    <>
      <Vertor />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          direccion: "",
        }}
        validate={(valores) => {
          let errores = {};
          if (!valores.name) {
            errores.name = "Por favor Ingresa un nombre";
          }
          if (!valores.email) {
            errores.email = "Por favor Ingresa un Correo Electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email = "Por favor Ingresa un Correo Electronico Valido";
          }
          if (!valores.password) {
            errores.password = "Por favor Ingresa su Contraseña";
          }
          if (!valores.direccion) {
            errores.direccion = "Por favor Ingresa un nombre";
          }

          return errores;
        }}
        onSubmit={async(valores, { resetForm }) => {

          console.log(valores);

          await axios.post(users, valores).then((resp) => {
            if(resp.status === 201){             
              alertify.notify('Regitro Exitoso', 'success', 5, function () { console.log('dismissed'); });
            }else{
              alertify.error("Error al guardar los Datos")
            }
          
          });
          resetForm();
        }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
          <FormContainer onSubmit={handleSubmit}>
            <H1Text>Crear Perfil</H1Text>

            <FloatingLabel
              controlId="floatingInput"
              label="Nombre completo"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="name"
                placeholder="Nombre completo"
                className="inputFocus input rounded-pill"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <div className="error">{errors.name}</div>
              )}
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Correo electronico"
              className="mb-3"
            >
              <Form.Control
                type="email"
                name="email"
                placeholder="Correo electronico"
                className="inputFocus input rounded-pill"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <div className="error">{errors.email}</div>
              )}
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Contraseña">
              <Form.Control
                type="password"
                name="password"
                placeholder="Contraseña"
                className="inputFocus input rounded-pill"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Dirección">
              <Form.Control
                type="text"
                name="direccion"
                placeholder="Dirección"
                className="inputFocus input rounded-pill"
                value={values.direccion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.direccion && errors.direccion && (
                <div className="error">{errors.direccion}</div>
              )}
            </FloatingLabel>

            <ButtonContainer>
              <Button variant="success" type="submit">
                Crear
              </Button>
            </ButtonContainer>
          </FormContainer>
        )}
      </Formik>
    </>
  );
};

export default FormRegistro;
