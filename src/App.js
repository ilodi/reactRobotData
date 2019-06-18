import React from 'react';
import Header from './conponents/Header';
import Footer from './conponents/Footer';

function App() {
  const date = new Date().getFullYear();
  return (
    <div className="App">
      <Header

      />
      <Footer
        date="date"
      />
    </div>
  );
}

export default App;
