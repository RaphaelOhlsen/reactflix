import { useState } from 'react';

export default function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function handleChange(ev) {
    const key = ev.target.getAttribute('name');
    const { value } = ev.target;
    setValues({
      ...values,
      [key]: value,
    });
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}
