import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate para navegação
import '../styles/Login.css';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Usando o hook useNavigate

  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem(email)); // Verifica se o usuário existe no localStorage
    if (userData && userData.senha === senha) {
      setUser(userData); // Define o usuário no estado
      navigate('/'); // Redireciona para a home
      setErrorMessage('');
    } else {
      setErrorMessage('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="login-container">
      {/* Título */}
      <header className="login-header">
        <h1>Login</h1>
      </header>

      {/* Corpo da página */}
      <main className="login-body">
        <section className="form-section">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {errorMessage && <div className="error">{errorMessage}</div>}
        </section>

        {/* Botões */}
        <section className="action-buttons">
          <button onClick={handleLogin}>Entrar</button>
        </section>

        {/* Navegação */}
        <section className="navigation-buttons">
          <button onClick={() => navigate('/cadastro')}>Cadastre-se</button>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="login-footer">
        <p>&copy; 2025 Sistema Financeiro - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default Login;
