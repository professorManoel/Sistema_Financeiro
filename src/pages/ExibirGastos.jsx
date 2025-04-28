import React, { useEffect, useState } from 'react';
import '../styles/ExibirGasto.css';

function ExibirGastos() {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    const storedGastos = JSON.parse(localStorage.getItem('gastos')) || [];
    setGastos(storedGastos);
  }, []);

  return (
    <div className="exibir-gastos-container">
      {/* Título */}
      <header className="exibir-gastos-header">
        <h1>Exibir Gastos</h1>
      </header>

      {/* Corpo da página */}
      <main className="exibir-gastos-body">
        <section className="gastos-list">
          {gastos.length > 0 ? (
            <ul>
              {gastos.map((gasto, index) => (
                <li key={index}>
                  <p><strong>Descrição:</strong> {gasto.descricao}</p>
                  <p><strong>Valor:</strong> R$ {gasto.valor}</p>
                  <p><strong>Categoria:</strong> {gasto.categoria}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum gasto cadastrado.</p>
          )}
        </section>
      </main>

      {/* Rodapé */}
      <footer className="exibir-gastos-footer">
        <button onClick={() => window.location.href = '/'}>Ir para Home</button>
      </footer>
    </div>
  );
}

export default ExibirGastos;
