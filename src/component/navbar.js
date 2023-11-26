import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundImage: "url('../../asset/beranda/Vector 1.png')", backgroundSize: "cover", backgroundPosition: "top", overflowY: "auto", height: "120vh", marginTop: "-70px", zIndex: -1}}>
        <div className="container-fluid" style={{ padding: "70px", marginTop: "-450px"}}>
          <a className="navbar-brand" href="#">
            <img src="../../asset/header-footer/header.png" alt="Header Logo" style={{ zIndex: 1000 }} />
          </a>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a className="nav-link active border-bottom border-white border-2" aria-current="page" href="#" style={{ color: 'white' }}>Beranda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'white' }}>Tentang</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'white' }}>Galeri</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'white' }}>Artikel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'white' }}>Kontak</a>
              </li>
            </ul>

          </div>
          <div>
            <button className='rounded px-4 px-3 py-1' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', color: 'white', border: 'rgba(255, 255, 255, 0.4)' }}>PPDB</button>

          </div>
        </div>
      </nav>
    );
  }
}
