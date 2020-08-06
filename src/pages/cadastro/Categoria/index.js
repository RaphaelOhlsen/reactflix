import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categorias, setCategorias] = useState([]);

  const [values, setValues] = useState(valoresIniciais);

  function handleSubmit(ev) {
    ev.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

  function handleChange(ev) {
    const key = ev.target.getAttribute('name');
    const { value } = ev.target;
    setValues({
      ...values,
      [key]: value,
    });
  }

  useEffect(() => {
    console.log('Teste de useEffect');
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://mocadflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (res) => {
        const resposta = await res.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={(ev) => handleSubmit(ev)}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && <div>Loading</div>}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};
export default CadastroCategoria;
