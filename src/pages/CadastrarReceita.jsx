import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate para navegação
import '../styles/CadastrarReceita.css';

function CadastrarReceita() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Usando o hook useNavigate

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

    // Limpar os campos após salvar
    setDescricao('');
    setValor('');
    setCategoria('');

    alert('Receita cadastrada com sucesso!');
  };

  return (
    <div className="cadastrar-receita-container">
      {/* Título */}
      <header className="cadastrar-receita-header">
        <h1>Cadastrar Receita</h1>
      </header>

      {/* Corpo da página */}
      <main className="cadastrar-receita-body">
        <section className="form-section">
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
        </section>

        {/* Botões */}
        <section className="action-buttons">
          <button onClick={handleSave}>Salvar</button>
          <button onClick={() => { setDescricao(''); setValor(''); setCategoria(''); }}>Descartar</button>
        </section>

        {/* Botões de navegação */}
        <section className="navigation-buttons">
          <button onClick={() => navigate('/')}>Ir para Home</button>
          <button onClick={() => navigate('/exibir-receitas')}>Ver Receitas</button>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="cadastrar-receita-footer">
        <p>&copy; 2025 Sistema Financeiro - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default CadastrarReceita;
