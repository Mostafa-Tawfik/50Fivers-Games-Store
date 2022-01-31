import React from 'react';

export default function Aside() {
  return <div>
    <aside>
      <div className="top">
          <h3>BROWSE CATEGORIES</h3>
          <div className="item"><a href="#0">Best Selling</a></div>
          <div className="item"><a href="#0">Upcoming</a></div>
          <div className="item"><a href="#0">New Releases</a></div>
          <div className="item"><a href="#0">On Sale</a></div>
      </div>
      <div className="mid">
          <h3>Genre</h3>
          <div className="item"><a href="#0">Action</a></div>
          <div className="item"><a href="#0">RPG</a></div>
          <div className="item"><a href="#0">Strategy</a></div>
          <div className="item"><a href="#0">Simulation</a></div>
          <div className="item"><a href="#0">Racing</a></div>
          <div className="item"><a href="#0">Sports</a></div>
          <div className="item"><a href="#0">Shooter</a></div>
      </div>
    </aside>
  </div>;
}
