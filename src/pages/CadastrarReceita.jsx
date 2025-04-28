import React, { useState } from 'react';
import '../styles/Cadastro.css';

function CadastrarReceita() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSave = () => {
    if (!descricao || !valor || !categoria) {
      setErrorMessage('Por favor, preencha todos os campos!');
      return;
    }

    const receita = { descricao, valor, categoria };
    let receitas = JSON.parse(localStorage.getItem('receitas')) || [];
    receitas.push(receita); // Adiciona a nova receita
    localStorage.setItem('receitas', JSON.stringify(receitas)); // Salva no localStorage
    setErrorMessage('');
    alert('Receita cadastrada com sucesso!');
  };

  return (
    <div className="container">
      <h2>Cadastrar Receita</h2>
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

export default CadastrarReceita;
