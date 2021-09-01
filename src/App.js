import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  let Pagina;
  const { pathname } = window.location;

  if (pathname === '/') {
    Pagina = Home;
  } else {
    Pagina = Produtos;
  }

  return (
    <div>
      <Header />
      <Pagina />
    </div>
  );
};

export default App;
