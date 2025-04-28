import React, { useEffect, useState } from 'react';
import '../styles/ExibirReceita.css';

function ExibirReceitas() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const storedReceitas = JSON.parse(localStorage.getItem('receitas')) || [];
    setReceitas(storedReceitas);
  }, []);

  return (
    <div className="exibir-receitas-container">
      {/* Título */}
      <header className="exibir-receitas-header">
        <h1>Exibir Receitas</h1>
      </header>

      {/* Corpo da página */}
      <main className="exibir-receitas-body">
        <section className="receitas-list">
          {receitas.length > 0 ? (
            <ul>
              {receitas.map((receita, index) => (
                <li key={index}>
                  <p><strong>Descrição:</strong> {receita.descricao}</p>
                  <p><strong>Valor:</strong> R$ {receita.valor}</p>
                  <p><strong>Categoria:</strong> {receita.categoria}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhuma receita cadastrada.</p>
          )}
        </section>
      </main>

      {/* Rodapé */}
      <footer className="exibir-receitas-footer">
        <button onClick={() => window.location.href = '/'}>Ir para Home</button>
      </footer>
    </div>
  );
}

export default ExibirReceitas;
