
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import CadastrarReceita from './pages/CadastrarReceita';
import CadastrarGasto from './pages/CadastrarGasto';
import ExibirReceitas from './pages/ExibirReceitas';
import ExibirGastos from './pages/ExibirGastos';
import NotFound from './pages/NotFound';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  return (
   
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home user={user} setUser={setUser} /> : <Login setUser={setUser} />} />
        <Route path="/cadastro" element={<Cadastro setUser={setUser} />} />
        <Route path="/perfil" element={<Perfil user={user} setUser={setUser} />} />
        <Route path="/cadastrar-receita" element={<CadastrarReceita />} />
        <Route path="/cadastrar-gasto" element={<CadastrarGasto />} />
        <Route path="/exibir-receitas" element={<ExibirReceitas />} />
        <Route path="/exibir-gastos" element={<ExibirGastos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
