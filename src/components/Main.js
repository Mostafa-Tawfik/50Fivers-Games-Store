import React from 'react';

export default function Main() {
  return <div>
    <article>
      <div className="games">
          <img src="../images/BF.jpg" alt="Battlefield"></img>
          <div className="infos">
              <p>Battlefield 2042</p>
              <p className="tag">Shooter FPS </p>
              <p className="price">$60</p>
          </div>
          <div className="middle">
              <div className="text"><a href="#">Battlefield</a></div>
          </div>
      </div>
      <div className="games">
          <img src="../images/GTA.jpeg" alt="GTA"></img>
          <div className="infos">
              <p>GTA V</p>
              <p className="tag">Action Open-World</p>
              <p className="price"><span className="pricebefore">$60</span> $15</p>
          </div>
          <div className="middle">
              <div className="text"><a href="#">GTA V</a></div>
          </div>
      </div>
      <div className="games">
          <img src="../images/fifa-22.jpg" alt="FIFA"></img>
          <div className="infos">
              <p>FIFA 22</p>
              <p className="tag">Sports Football</p>
              <p className="price">$60</p>
          </div>
          <div className="middle">
              <div className="text"><a href="#">FIFA 22</a></div>
          </div>
      </div>
      <div className="games">
          <img src="../images/aoe.png" alt="Age of Empires IV"></img>
          <div className="infos">
              <p>Age of Empires IV</p>
              <p className="tag">Strategy RTS</p>
              <p className="price">$60</p>
          </div>
          <div className="middle">
              <div className="text"><a href="#">Age of Empires IV</a></div>
          </div>
      </div>
      <div className="games">
          <img src="../images/fc6.jpg" alt="Far Cry 6"></img>
          <div className="infos">
              <p>Far Cry 6</p>
              <p className="tag">Action Open-World</p>
              <p className="price">$60</p>
          </div>
          <div className="middle">
              <div className="text"><a href="#">Far Cry 6</a></div>
          </div>
      </div>
    </article>
  </div>;
}
