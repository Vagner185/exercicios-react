import React from 'react';
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setCarregando(false);
    setDados(json);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        style={{ padding: '0.5rem', margin: '1rem' }}
      >
        Notebook
      </button>
      <button
        onClick={handleClick}
        style={{ padding: '0.5rem', margin: '1rem' }}
      >
        Tablet
      </button>
      <button
        onClick={handleClick}
        style={{ padding: '0.5rem', margin: '1rem' }}
      >
        Smartphone
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;
