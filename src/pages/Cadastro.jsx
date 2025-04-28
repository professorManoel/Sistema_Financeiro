import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cadastro.css';

function Cadastro({ setUser }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [sexo, setSexo] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [profissao, setProfissao] = useState('');
  const [salario, setSalario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleCadastro = () => {
    if (!nome || !email || !sexo || !nascimento || !profissao || !salario || !senha || !confirmaSenha) {
      setErrorMessage('Por favor, preencha todos os campos!');
      return;
    }
    if (senha === confirmaSenha) {
      const userData = { nome, email, sexo, nascimento, profissao, salario, senha };
      localStorage.setItem(email, JSON.stringify(userData)); // Armazena no localStorage
      setUser(userData); // Define o usuário no estado
      navigate('/'); // Redireciona para a home
      setErrorMessage('');
    } else {
      setErrorMessage('As senhas não coincidem');
    }
  };

  return (
    <div className="container">
      <h2>Cadastro</h2>
      <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Sexo" onChange={(e) => setSexo(e.target.value)} />
      <input type="date" placeholder="Data de Nascimento" onChange={(e) => setNascimento(e.target.value)} />
      <input type="text" placeholder="Profissão" onChange={(e) => setProfissao(e.target.value)} />
      <input type="number" placeholder="Salário" onChange={(e) => setSalario(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
      <input type="password" placeholder="Confirmar Senha" onChange={(e) => setConfirmaSenha(e.target.value)} />
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button onClick={handleCadastro}>Cadastre-se</button>
    </div>
  );
}

export default Cadastro;
