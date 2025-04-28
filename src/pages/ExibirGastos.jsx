import React, { useEffect, useState } from 'react';

function ExibirGastos() {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    const storedGastos = JSON.parse(localStorage.getItem('gastos')) || [];
    setGastos(storedGastos);
  }, []);

  return (
    <div>
      <h3>Gastos</h3>
      <ul>
        {gastos.map((gasto, index) => (
          <li key={index}>{`${gasto.descricao}: R$ ${gasto.valor} (${gasto.categoria})`}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExibirGastos;
