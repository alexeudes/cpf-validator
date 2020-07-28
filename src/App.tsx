import React from 'react';
import { Formik, Field, Form } from 'formik'
import Logo from './assets/images/logo.png';

interface Values {
  cpf: string,
}

const CpfValidator = () => {
  return (
    <div>
      <img className="Logo"
        src={Logo}
        alt="logo-animeflix"
      />

      <Formik initialValues={{
        cpf: '',
      }}
        onSubmit={(
          values: Values,
        ) => {

        }}
      >

        <Form>
          <div className="formField">
            <label htmlFor="cpf">
              Informe o CPF:
            </label>
            <Field
              id="cpf"
              name="cpf"
              placeholder="Ex.: 423.486.830-24"
              type="text"
            />

            <button type="submit">
              Validar
            </button>

          </div>
        </Form>

      </Formik>
    </div>
  );
}

export default CpfValidator;
