import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home({ user, setUser }) {
  const [saldo, setSaldo] = useState(0);
  const [receita, setReceita] = useState(0);
  const [gasto, setGasto] = useState(0);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Bem-vindo, {user.nome}</h2>
      <p>Saldo: R${saldo}</p>
      <p>Receita: R${receita}</p>
      <p>Despesa: R${gasto}</p>
      <button onClick={() => navigate('/perfil')}>Perfil</button>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}

export default Home;
