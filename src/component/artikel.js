import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import dataKegiatan from "../data/kegiatan.json"

export default function Beranda() {
  const [jsonKegiatan, setJsonKegiatan] = useState([]);

  useEffect(() => {
    setJsonKegiatan(dataKegiatan);
  }, []);
  return (
    <>
      <section style={{ position: "relative", backgroundImage: "url('../../asset/beranda/Vector 1.png')", backgroundSize: "cover", backgroundPosition: "top", overflowY: "auto", height: "120vh", marginTop: "-210px", zIndex: 1 }}>
        <div className='d-flex flex-row justify-content-between' style={{ position: "relative", zIndex: 1000, marginTop: "200px", color: "white", padding: "70px" }}>
          <div style={{ zIndex: 2, marginTop: "50px" }}>
            <h1 style={{ fontSize: "60px" }}>Artikel</h1>
            <p style={{ width: "490px", fontSize: "20px" }}>Beberapa berita, informasi kegiatan sekolah dan artikel pendidikan lainnya.</p>
          </div>
          <div style={{ zIndex: 2 }}>
            <img src='../../asset/artikel/hero.png' style={{ width: "470px" }} alt="Hero Image" />
          </div>
        </div>
      </section>

      <section style={{ padding: "70px", marginTop: "50px" }}>
      <div className="d-flex justify-content-center align-items-center gap-5 fs-5" style={{ marginBottom: "50px" }}>
            <p style={{ fontWeight: "bolder", borderBottom: "3px solid #3190DC", width: "150px", display: "inline-block", textAlign: "center", paddingBottom: "10px", color: '#404040', fontSize: "20px" }}>Semua</p>
            <p style={{ marginTop: "-10px", color: '#404040', fontSize: "20px" }}>Gedung</p>
            <p style={{ marginTop: "-10px", color: '#404040', fontSize: "20px" }}>Kegiatan Sekolah</p>
          </div>

        <div className="border border-info border-2 p-4 d-flex" style={{ width: "1120px", borderRadius: '20px', margin: "10px", marginLeft: 0, height: "404px" }}>
          <img src='../../asset/beranda/artikel.png' style={{ height: "350px", width: "550px" }}></img>
          <ul>
            <button className="rounded-pill fs-6 px-3 py-1" style={{ background: 'linear-gradient(#4BA3EB, #5DDAAA)', color: 'white', border: 'none', zIndex: '1', fontSize: "12px" }}>
              12 Desember 2021
            </button>
            <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#1C2661", width: "500px", marginTop: "10px" }}>Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah</h1>
            <p style={{ width: "498px", fontSize: "16px", marginTop: "5px", textAlign: "justify" }}>
              Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. Begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu di...
            </p>

            <p style={{ fontSize: "12px", marginTop: "-5px" }}>Penulis : Shinta A.P</p>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <p style={{ fontSize: "16px", fontWeight: "bold", color: '#3190DC' }}>Baca selengkapnya</p>
            </Link>
          </ul>
        </div>

        <div className="d-flex flex-wrap gap-3" style={{marginTop: "50px"}}>
          {jsonKegiatan.map((item, index) => (
            <a key={index} href="#" className="group" style={{ textDecoration: "none" }}>
              <h1 className="border border-info border-2 p-4" style={{ width: "353.7px", borderRadius: '20px', margin: "10px", marginLeft: 0, height: "425px" }}>
                <ul style={{ paddingLeft: 0 }}>
                  <img src={item.img} alt="Article" style={{ width: '100%' }} />
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="rounded-pill px-3 py-1" style={{ background: 'linear-gradient(#4BA3EB, #5DDAAA)', color: 'white', border: 'none', position: 'absolute', zIndex: '1', fontSize: "12px" }}>
                      12 Desember 2021
                    </button>
                  </div>
                </ul>
                <p style={{ fontWeight: 'bold', paddingTop: "10px", color: "#1C2661", fontSize: "17px" }}>
                  {item.title}
                </p>
                <p style={{ fontSize: '13px', fontWeight: 'normal', textAlign: 'justify', color: "black" }}>
                  {item.desc}
                </p>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <p style={{ fontSize: "13px", color: '#3190DC' }}>Baca selengkapnya</p>
                </Link>
              </h1>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
