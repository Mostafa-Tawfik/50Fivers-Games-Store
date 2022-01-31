import React from 'react';

export default function Aside() {
  return <div>
    <aside>
      <div className="top">
          <h3>BROWSE CATEGORIES</h3>
          <div className="item"><a href="#">Best Selling</a></div>
          <div className="item"><a href="#">Upcoming</a></div>
          <div className="item"><a href="#">New Releases</a></div>
          <div className="item"><a href="#">On Sale</a></div>
      </div>
      <div className="mid">
          <h3>Genre</h3>
          <div className="item"><a href="#">Action</a></div>
          <div className="item"><a href="#">RPG</a></div>
          <div className="item"><a href="#">Strategy</a></div>
          <div className="item"><a href="#">Simulation</a></div>
          <div className="item"><a href="#">Racing</a></div>
          <div className="item"><a href="#">Sports</a></div>
          <div className="item"><a href="#">Shooter</a></div>
      </div>
    </aside>
  </div>;
}
