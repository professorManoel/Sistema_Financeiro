import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

function Home({ user, setUser }) {
  const [saldo, setSaldo] = useState(0);
  const [receita, setReceita] = useState(0);
  const [gasto, setGasto] = useState(0);

  // Função para calcular as receitas e os gastos
  const calcularValores = () => {
    // Recupera os dados de receitas e gastos do localStorage
    const receitas = JSON.parse(localStorage.getItem('receitas')) || [];
    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];

    // Calcula a soma das receitas
    const totalReceitas = receitas.reduce((acc, receita) => acc + parseFloat(receita.valor), 0);

    // Calcula a soma dos gastos
    const totalGastos = gastos.reduce((acc, gasto) => acc + parseFloat(gasto.valor), 0);

    // Atualiza os estados de receita, gasto e saldo
    setReceita(totalReceitas);
    setGasto(totalGastos);
    setSaldo(totalReceitas - totalGastos); // O saldo é a diferença entre receitas e gastos
  };

  useEffect(() => {
    calcularValores();
  }, []); // Executa a função apenas quando o componente é montado

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className="home-container">
      {/* Título */}
      <header className="home-header">
        <h1>Bem-vindo, {user ? user.nome : 'Visitante'}</h1>
      </header>

      {/* Corpo da página */}
      <main className="home-body">
        <section className="user-info">
          <p><strong>Saldo Atual:</strong> R$ {saldo.toFixed(2)}</p>
          <p><strong>Receitas:</strong> R$ {receita.toFixed(2)}</p>
          <p><strong>Gastos:</strong> R$ {gasto.toFixed(2)}</p>
        </section>
        
        {/* Botões de navegação */}
        <section className="action-buttons">
          <button onClick={() => window.location.href = '/cadastrar-receita'}>Cadastrar Receita</button>
          <button onClick={() => window.location.href = '/cadastrar-gasto'}>Cadastrar Gasto</button>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="home-footer">
        <p>&copy; 2025 Sistema Financeiro - Todos os direitos reservados</p>
        <button onClick={handleLogout}>Sair</button>
      </footer>
    </div>
  );
}

export default Home;
