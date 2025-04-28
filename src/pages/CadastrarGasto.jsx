import React, { useState } from 'react';
import '../styles/Cadastro.css';

function CadastrarGasto() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSave = () => {
    if (!descricao || !valor || !categoria) {
      setErrorMessage('Por favor, preencha todos os campos!');
      return;
    }

    const gasto = { descricao, valor, categoria };
    let gastos = JSON.parse(localStorage.getItem('gastos')) || [];
    gastos.push(gasto); // Adiciona o novo gasto
    localStorage.setItem('gastos', JSON.stringify(gastos)); // Salva no localStorage
    setErrorMessage('');
    alert('Gasto cadastrado com sucesso!');
  };

  return (
    <div className="container">
      <h2>Cadastrar Gasto</h2>
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button onClick={handleSave}>Salvar</button>
      <button onClick={() => { setDescricao(''); setValor(''); setCategoria(''); }}>Descartar</button>
    </div>
  );
}

export default CadastrarGasto;
