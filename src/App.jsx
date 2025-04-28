// Importação do React e hook useState do React
import React, { useState } from 'react';

// Importação do React Router para gerenciar as rotas
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importação das páginas/componentes para as rotas
import Login from './pages/Login'; // Página de login
import Cadastro from './pages/Cadastro'; // Página de cadastro
import Home from './pages/Home'; // Página inicial
import Perfil from './pages/Perfil'; // Página do perfil
import CadastrarReceita from './pages/CadastrarReceita'; // Página para cadastrar receita
import CadastrarGasto from './pages/CadastrarGasto'; // Página para cadastrar gasto
import ExibirReceitas from './pages/ExibirReceitas'; // Página para exibir receitas
import ExibirGastos from './pages/ExibirGastos'; // Página para exibir gastos
import NotFound from './pages/NotFound'; // Página de erro (para quando a rota não for encontrada)

function App() {
  // Definição do estado 'user' para armazenar o usuário logado. 
  // O estado é inicializado com os dados do usuário armazenados no localStorage ou com 'null' caso não haja dados.
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  return (
    // O Router envolve todas as rotas e gerencia a navegação do aplicativo.
    <Router>
      {/* O componente Routes gerencia as rotas dentro do aplicativo */}
      <Routes>
        {/* Rota padrão ("/"). Se o usuário estiver logado, a página 'Home' será exibida, 
        caso contrário, a página 'Login' será exibida */}
        <Route path="/" element={user ? <Home user={user} setUser={setUser} /> : <Login setUser={setUser} />} />

        {/* Rota para a página de cadastro */}
        <Route path="/cadastro" element={<Cadastro setUser={setUser} />} />

        {/* Rota para a página do perfil, passando o estado 'user' */}
        <Route path="/perfil" element={<Perfil user={user} setUser={setUser} />} />

        {/* Rota para a página de cadastro de receita */}
        <Route path="/cadastrar-receita" element={<CadastrarReceita />} />

        {/* Rota para a página de cadastro de gasto */}
        <Route path="/cadastrar-gasto" element={<CadastrarGasto />} />

        {/* Rota para exibir as receitas cadastradas */}
        <Route path="/exibir-receitas" element={<ExibirReceitas />} />

        {/* Rota para exibir os gastos cadastrados */}
        <Route path="/exibir-gastos" element={<ExibirGastos />} />

        {/* Rota para qualquer caminho que não tenha sido definido anteriormente.
        Será redirecionado para a página NotFound (erro 404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// Exporta o componente App para ser usado em outros arquivos
export default App;
