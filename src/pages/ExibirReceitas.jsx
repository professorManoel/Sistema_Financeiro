import React, { useEffect, useState } from 'react';

function ExibirReceitas() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const storedReceitas = JSON.parse(localStorage.getItem('receitas')) || [];
    setReceitas(storedReceitas);
  }, []);

  return (
    <div>
      <h3>Receitas</h3>
      <ul>
        {receitas.map((receita, index) => (
          <li key={index}>{`${receita.descricao}: R$ ${receita.valor} (${receita.categoria})`}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExibirReceitas;
