import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import dataKurikulum from "../data/kurikulum.json"
import dataGuru from "../data/guru.json"
import dataArtikel from "../data/artikel.json"
import "../dist/css/tentang.css";


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
        <section className="tentang1" style={{backgroundImage: "url('../../asset/beranda/Vector 1.png')"}}>
          <div className='tentang1-gambar d-flex flex-row justify-content-between'>
            <div className="tentang1-text">
              <h1>Tentang Kami</h1>
              <p>Profil sekolah kami dan beberapa info penting tentang sekolah ini agar anda lebih yakin dan mengerti.</p>
            </div>
            <div className="tentang1-image">
              <img src='../../asset/tentang kami/tentangkami.png' alt="Hero Image" />
            </div>
          </div>
        </section>

        <section className="tentang2">
          <p className="tentang2-judul">Profil Singkat</p>
          <h1>Sekolah Informal</h1>
          <p>Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum terbaik agar anak bisa memilih minat nya dan fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang hingga saat ini. berlokasikan di jl. SoekarnoHatta Blok J No. 245, Lowokwaru, Blimbing, Kota Malang. Sejak berdirinya sekolah ini, sudah lebih dari 250.000 siswa lulus dari sekolah kami. Dengan menjunjung tinggi kejujuran, kedisiplinan dan semangat belajar yang tinggi kami berharap bisa terus meghasilkan siswa-siswa lulusan terbaik dari sekolah ini.</p>
        </section>

        <section>
          <div className="tentang3 position-relative" style={{ backgroundImage: "url('../../asset/beranda/Vector 2.png')"}}>
            <div className="tentang3-judul">
              Keunggulan sekolah kami
            </div>

            <div className="unggul d-flex flex-wrap gap-3">
              {jsonKurikulum.map((item, index) => (
                <a key={index} href="#" className="unggul-group">
                  <div>
                    <ul className='align-items-center justify-content-center shadow-lg d-flex flex-row gap-3 bg-white rounded 4-px px-4'>
                      <img className="align-items-center justify-content-center" src={item.image}></img>
                      <div>
                        <h1 className='fs-4 '>{item.title}</h1>
                        <p>{item.description}</p>
                      </div>
                    </ul>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="tentang4-bungkus">
            <h1 style={{ fontWeight: 'bold', marginTop: "20px", fontSize: "50px" }}>Guru & Staff Sekolah</h1>
            <h2 className="d-flex justify-content-between">
              <p className="tentang4-desc">Perkenalan Anggota Sekolah</p>
              <button className='lihat d-flex align-items-center rounded 4-px btn btn-primary'>
                Lihat Semua
                <img src="../../asset/header-footer/next.png" alt="Icon" />
              </button>
            </h2>
            <h3 className=" tentang4-card d-flex gap-4">
              {jsonGuru.map((item, index) => (
                <a key={index} href="#" className="tentang4-group">
                  <img src={item.image}></img>
                  <h1 className="fw-semibold justify-content-center">
                    {item.name}
                  </h1>
                  <p className="justify-content-center">{item.desc}</p>
                </a>
              ))}
            </h3>
          </div>
        </section>

        <section>
          <div className="tentang5">
            <h1>Video Profil</h1>
            <p className="fs-5" style={{ color: '#1C2661' }}>Cuplikan Sekolah</p>
            <h2 className="border border-info border-2 p-4">
              <img src="../../asset/tentang kami/video.png"></img>
            </h2>
          </div>
        </section>

      </nav>

    </>

  )
}
