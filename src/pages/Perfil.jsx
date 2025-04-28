import React, { useState } from 'react';
import '../styles/Perfil.css';

function Perfil({ user, setUser }) {
  const [nome, setNome] = useState(user.nome);
  const [email, setEmail] = useState(user.email);
  const [sexo, setSexo] = useState(user.sexo);
  const [nascimento, setNascimento] = useState(user.nascimento);
  const [profissao, setProfissao] = useState(user.profissao);
  const [salario, setSalario] = useState(user.salario);

  const handleUpdate = () => {
    const updatedUser = { ...user, nome, email, sexo, nascimento, profissao, salario };
    localStorage.setItem(email, JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const handleDelete = () => {
    localStorage.removeItem(email);
    setUser(null);
  };

  return (
    <div className="container">
      <h2>Perfil</h2>
      <p>Email: {email}</p>
      <p>Nome: {nome}</p>
      <p>Sexo: {sexo}</p>
      <p>Data de Nascimento: {nascimento}</p>
      <p>Profissão: {profissao}</p>
      <p>Salário: {salario}</p>
      <button onClick={handleUpdate}>Atualizar Perfil</button>
      <button onClick={handleDelete}>Excluir Perfil</button>
    </div>
  );
}

export default Perfil;
