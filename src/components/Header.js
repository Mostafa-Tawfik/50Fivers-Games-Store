import React from 'react';

export default function Header() {
  return <div>
      <div className="overlay"></div>
      <header>
          <img src='../images/logo.png' className="App-logo" alt="logo" />
          <h1>games Store</h1>
      </header>
        <nav>
            <h2><a href="#">STORE</a></h2>
            <h2><a href="#">NEWS</a></h2>
            <h2><a href="#">FAQ</a></h2>
            <h2><a href="#">SUPPORT</a></h2>
            <h2><a href="#">CONTACT US</a></h2>
            <h2><a href="#">MY ACCOUNT</a></h2>
        </nav>
  </div>;
}
