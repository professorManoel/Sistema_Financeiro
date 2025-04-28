import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

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
    <div className="container">
      <h2>Login</h2>
      <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <a href="/cadastro">Cadastre-se</a>
    </div>
  );
}

export default Login;
