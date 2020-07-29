import React, { useState } from 'react';
import Logo from './assets/images/logo.png';

const CpfValidator = () => {
  const initialValues = {
    cpf: '',
  }

  const [values, setValues] = useState(initialValues);

  function setValueCpf(key: string, value: string) {
    setValues({
      ...values,
      [key]: value
    });
  }

  function handleChange(event: any) {
    const prop = event.target.getAttribute('name');
    const value = event.target.value;

    setValueCpf(
      prop,
      value
    );
  }

  function handleValidate(event: any) {
    event.preventDefault();
  }

  return (
    <div>
      <img className="Logo"
        src={Logo}
        alt="logo-animeflix"
      />

      <form onSubmit={handleValidate}>
        <div className="formField">
          <label htmlFor="cpf">
            Informe o CPF:
            </label>
          <input
            id="cpf"
            name="cpf"
            placeholder="Ex.: 423.486.830-24"
            type="text"
            onChange={handleChange}
          />

          <button type="submit">
            Validar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CpfValidator;
