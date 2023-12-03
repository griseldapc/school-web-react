import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import dataKegiatan from "../data/kegiatan.json"
import '../dist/css/artikel.css';

export default function Beranda() {
  const [jsonKegiatan, setJsonKegiatan] = useState([]);

  useEffect(() => {
    setJsonKegiatan(dataKegiatan);
  }, []);
  return (
    <>
       <section className="artikel1" style={{backgroundImage: "url('../../asset/beranda/Vector 1.png')"}}>
          <div className='artikelhero d-lg-flex flex-row d-md-flex justify-content-between'>
          <div className="textartikel">
            <h1>Artikel</h1>
            <p>Beberapa berita, informasi kegiatan sekolah dan artikel pendidikan lainnya.</p>
          </div>
          <div className="artikelimage">
            <img src='../../asset/artikel/hero.png' alt="Hero Image" />
          </div>
        </div>
      </section>

      <section className="artikel2">
      <div className="option d-flex justify-content-center align-items-center gap-lg-5 gap-md-5 gap-3">
            <p className="semua">Semua</p>
            <p className="gedung">Gedung</p>
            <p className="sekolah">Kegiatan Sekolah</p>
          </div>

        <div className="main-card border border-info border-2 p-4 d-lg-flex d-md-flex">
          <img src='../../asset/beranda/artikel.png'></img>
          <ul>
            <button className="button-main rounded-pill px-3 py-1">
              12 Desember 2021
            </button>
            <h1 className="judul">Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah</h1>
            <p className="deskripsi">
              Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. Begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu di...
            </p>

            <p className="penulis">Penulis : Shinta A.P</p>
            <Link to="/detail_artikel" style={{ textDecoration: 'none' }}>
              <p className="selengkapnya">Baca selengkapnya</p>
            </Link>
          </ul>
        </div>

        <div className="mini-card d-lg-flex d-md-flex flex-lg-wrap flex-md-wrap flex-wrap gap-lg-3 gap-md-1">
          {jsonKegiatan.map((item, index) => (
            <a key={index} href="#" className="group">
              <h1 className="cover border border-info border-2 p-4">
                <ul className="bungkus">
                  <img src={item.img} alt="Article" />
                  <div className="all d-flex justify-content-center align-items-center">
                    <button className="button-mini rounded-pill px-3 py-1">
                      12 Desember 2021
                    </button>
                  </div>
                </ul>
                <p className="title">
                  {item.title}
                </p>
                <p className="desc">
                  {item.desc}
                </p>
                <Link className="baca" to="/">
                  <p className="text-baca">Baca selengkapnya</p>
                </Link>
              </h1>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

