import React from 'react';
import './App.scss';
import Header from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <section className="layout">
      <Header />
      <div className='main'>
        <Aside />
        <Main />
      </div>
      <Footer />
    </section>
  );
}

export default App;
