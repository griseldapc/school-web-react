import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import dataKurikulum from "../data/kurikulum.json"
import dataGuru from "../data/guru.json"
import dataArtikel from "../data/artikel.json"


export default function Beranda() {

  const [jsonKurikulum, setJsonKurikulum] = useState([]);
  const [jsonGuru, setJsonGuru] = useState([]);
  const [jsonArtikel, setJsonArtikel] = useState([]);

  useEffect(() => {
    setJsonKurikulum(dataKurikulum);
    setJsonGuru(dataGuru);
    setJsonArtikel(dataArtikel);
  }, []);

  return (
    <>
      <nav>
        <section style={{ position: "relative", backgroundImage: "url('../../asset/beranda/Vector 1.png')", backgroundSize: "cover", backgroundPosition: "top", overflowY: "auto", height: "120vh", marginTop: "-200px", zIndex: 1 }}>
          <div className='d-flex flex-row justify-content-between' style={{ position: "relative", zIndex: 1000, marginTop: "200px", color: "white", padding: "70px" }}>
            <div style={{ zIndex: 2, marginTop: "50px" }}>
              <h1 style={{ fontSize: "60px", width: "550px" }}>Tentang Kami</h1>
              <p style={{ width: "550px", fontSize: "20px" }}>Profil sekolah kami dan beberapa info penting tentang sekolah ini agar anda lebih yakin dan mengerti.</p>
            </div>
            <div style={{ zIndex: 2 }}>
              <img src='../../asset/tentang kami/tentangkami.png' style={{ width: "450px" }} alt="Hero Image" />
            </div>
          </div>
        </section>

        <section style={{ padding: "70px" }}>
          <p style={{ color: "#1C2661", fontSize: "20px" }}>Profil Singkat</p>
          <h1 style={{ fontWeight: "bold" }}>Sekolah Informal</h1>
          <p style={{ color: '#3A3B41', fontSize: "20px", width: "1160px" }}>Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum terbaik agar anak bisa memilih minat nya dan fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang hingga saat ini. berlokasikan di jl. SoekarnoHatta Blok J No. 245, Lowokwaru, Blimbing, Kota Malang. Sejak berdirinya sekolah ini, sudah lebih dari 250.000 siswa lulus dari sekolah kami. Dengan menjunjung tinggi kejujuran, kedisiplinan dan semangat belajar yang tinggi kami berharap bisa terus meghasilkan siswa-siswa lulusan terbaik dari sekolah ini.</p>
        </section>

        <section>
          <div className="position-relative" style={{ backgroundImage: "url('../../asset/beranda/Vector 2.png')", backgroundSize: "cover", backgroundPosition: "top", height: "120vh", zIndex: -1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: 'bold', fontSize: '60px', color: "white", paddingTop: "200px" }}>
              Keunggulan sekolah kami
            </div>

            <div className="d-flex flex-wrap gap-3" style={{ padding: "70px", marginTop: "-20px", justifyContent: "center", alignItems: "center" }}>
              {jsonKurikulum.map((item, index) => (
                <a key={index} href="#" className="group" style={{ textDecoration: "none" }}>
                  <div>
                    <ul className='align-items-center justify-content-center shadow-lg d-flex flex-row gap-3 bg-white rounded 4-px px-4' style={{ width: "550px", height: "215px"}}>                      
                      <img className="align-items-center justify-content-center" src={item.image} style={{ height: "90px", marginLeft: "-15px"}}></img>
                      <div>
                        <h1 className='fs-4 ' style={{ color: '#1C2661', fontWeight: 'bold', marginTop: "15px" }}>{item.title}</h1>
                        <p className="" style={{ width: "360px", color: '#3A3B41', fontSize: '15px',  }}>{item.description}</p>
                      </div>
                    </ul>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div style={{ padding: '70px', marginTop: "150px" }}>
          <h1 style={{ fontWeight: 'bold', marginTop: "20px", fontSize: "50px" }}>Guru & Staff Sekolah</h1>
                        <h2 className="d-flex justify-content-between">
                            <p style={{ fontWeight: 'normal', fontSize: "20px", color: '#1C2661' }}>Perkenalan Anggota Sekolah</p>
                            <button className='d-flex align-items-center rounded 4-px btn btn-primary' style={{ background: '#3190DC', color: 'white', paddingLeft: '20px', fontSize: "17px" }}>
                                Lihat Semua
                                <img src="../../asset/header-footer/next.png" alt="Icon" style={{ width: '30px' }} />
                            </button>
                        </h2>
            <h3 className="d-flex gap-4">
              {jsonGuru.map((item, index) => (
                <a key={index} href="#" className="group" style={{ textDecoration: "none" }}>
                  <img src={item.image} style={{ paddingTop: "30px", width: "262px" }}></img>
                  <h1 className="fw-semibold justify-content-center" style={{ fontSize: "20px", color: '#19245F', textAlign: "center", marginTop: "25px" }}>
                    {item.name}
                  </h1>
                  <p className="justify-content-center" style={{ fontSize: "15px", color: '#2E334E', textAlign: "center", marginTop: "12px", fontWeight: "normal" }}>{item.desc}</p>
                </a>
              ))}
            </h3>
          </div>
        </section>

        <section>
          <div style={{ padding: "70px", textAlign: "center", marginTop: "-40px" }}>
            <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>Video Profil</h1>
            <p className="fs-5" style={{ color: '#1C2661' }}>Cuplikan Sekolah</p>
            <h2 className="border border-info border-2 p-4" style={{ width: "1125px", borderRadius: '20px', margin: "10px", marginLeft: 0, marginTop: "50px", height: "610px" }}>
              <img src="../../asset/tentang kami/video.png" style={{ width: "1060px", marginTop: "6px" }}></img>
            </h2>
          </div>
        </section>

      </nav>

    </>

  )
}
