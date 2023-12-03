import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import dataGaleri from "../data/galeri.json"
import { Link } from 'react-router-dom';
import '../dist/css/galeri.css';


export default function Galeri() {
  const [jsonGaleri, setJsonGaleri] = useState([]);

  useEffect(() => {
    setJsonGaleri(dataGaleri);
  }, []);

  return (
    <>
      <section className="galeri1" style={{backgroundImage: "url('../../asset/beranda/Vector 1.png')"}}>
          <div className='galeri-gambar d-lg-flex d-md-flex flex-row justify-content-between'>
          <div className="galeri-text">
            <h1>Galeri</h1>
            <p>Beberapa hasil dokumentasi area sekolah dan kegiatan siswa di sekolah </p>
          </div>
          <div className="galeri-image" style={{ zIndex: 2 }}>
            <img src='../../asset/galeri/galeri.png' alt="Hero Image" />
          </div>
        </div>
      </section>

        <section className="galeri2">
          <div className="bungkus d-flex justify-content-center align-items-center gap-lg-5 fs-5 gap-md-5 gap-4">
            <p className="galeri2-semua">Semua</p>
            <p className="galeri2-gedung">Gedung</p>
            <p className="galeri2-sekolah">Kegiatan Sekolah</p>
          </div>

          <div className="galeri2-card d-flex flex-wrap gap-4">
            {jsonGaleri.map((item, index) => (
              <a key={index} href="#" class="group">
                <h1>
                  <img src={item.img} alt="Galeri"/>
                  <p className="galeri2-text position-absolute bottom-0 left-0 right-0 opacity-100">
                    {item.text}
                  </p>
                </h1>
              </a>
            ))}
          </div>

          <div className="data d-flex justify-content-between">
            <h1>Menampilkan 10 Dari 21 Data</h1>
            <h2 className="d-flex">
              <p>Halaman</p>
              <ul className="tampil d-flex gap-lg-3 gap-md-3 gap-2">
                <img className="satu" src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" ></img>
                <Link to="/">
                <p className="first">1</p>
                </Link>
                <p>2</p>
                <p>3</p>
                <img className="dua" src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png"></img>
              </ul>
            </h2>
          </div>
        </section>

    </>

  )
}
