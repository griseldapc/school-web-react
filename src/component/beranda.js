import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import dataKurikulum from "../data/kurikulum.json"
import dataGaleriBeranda from "../data/galeriBeranda.json"
import dataArtikel from "../data/artikel.json"
import "../dist/css/beranda.css"


export default function Beranda() {

    const [jsonKurikulum, setJsonKurikulum] = useState([]);
    const [jsonGaleriBeranda, setJsonGaleriBeranda] = useState([]);
    const [jsonArtikel, setJsonArtikel] = useState([]);

    useEffect(() => {
        setJsonKurikulum(dataKurikulum);
        setJsonGaleriBeranda(dataGaleriBeranda);
        setJsonArtikel(dataArtikel);
    }, []);

    return (
        <>
            <nav>
                <section className="beranda1" style={{backgroundImage: "url('../../asset/beranda/Vector 1.png')"}}>
                    <div className='beranda1-gambar d-flex flex-row justify-content-between'>
                        <div className="beranda1-bungkus">
                            <h1>Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik</h1>
                            <p>jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat</p>
                            <button className='daftar rounded 4-px px-3 py-2 btn btn-light fw-semibold'>Daftar Sekarang</button>
                        </div>
                        <div className="beranda1-image" style={{ zIndex: 2 }}>
                            <img src='../../asset/beranda/hero.png' className="pr-10" alt="Hero Image" />
                        </div>
                    </div>
                </section>

                <section className='beranda2 d-flex flex-row justify-content-between'>
                    <img src='../../asset/beranda/tentangkami.png'></img>
                    <ul className='justify-content-center my-auto'>
                        <h1>
                            Tentang Kami
                        </h1>
                        <p className='fs-5'>
                            Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum terbaik agar anak bisa memilih minat nya dan fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang hingga saat ini.
                        </p>
                    </ul>
                </section>

                <section>
                    <div className="beranda3 position-relative" style={{ backgroundImage: "url('../../asset/beranda/Vector 2.png')"}}>
                        <div className="beranda3-bungkus d-flex flex-wrap gap-3">
                            {jsonKurikulum.map((item, index) => (
                                <a key={index} href="#" className="beranda3-group">
                                    <div>
                                    <ul className='align-items-center justify-content-center shadow-lg d-flex flex-row gap-3 bg-white rounded 4-px px-4'>                      
                      <img className="beranda3-gambar align-items-center justify-content-center" src={item.image}></img>
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
                    <div className="beranda4">
                        <h1>Galeri</h1>
                        <h2 className="d-flex justify-content-between">
                            <p>Dokumentasi Sekolah Kami</p>
                            <button className='beranda4-lihat d-flex align-items-center rounded 4-px btn btn-primary'>
                                Lihat Semua
                                <img src="../../asset/header-footer/next.png" alt="Icon"/>
                            </button>
                        </h2>
                        <h3 className="d-flex gap-4">
                            {jsonGaleriBeranda.map((item, index) => (
                                <a key={index} href="#" className="beranda4-group-gambar" style={{ textDecoration: "none" }}>
                                    <img src={item.gambar}></img>
                                </a>
                            ))}
                        </h3>
                    </div>
                </section>

                <section>
                    <div className="beranda5" style={{ padding: "70px", marginTop: "-30px" }}>
                        <h1 className="beranda5-judul">Artikel</h1>
                        <h2 className="beranda5-bungkus d-flex justify-content-between fs-5">
                            <ul className="d-flex gap-5">
                                <p className="semua border-bottom border-info border-2">Semua</p>
                                <p>Berita</p>
                                <p>Kegiatan Sekolah</p>
                            </ul>
                            <ul className="beranda5-lihat">
                                Lihat Semua
                                <img src="../../asset/header-footer/next2.png" alt="Icon"/>
                            </ul>
                        </h2>

                        <div className="d-flex gap-4">
                            {jsonArtikel.map((item, index) => (
                                <a key={index} href="#" className="beranda5-group-card" style={{ textDecoration: "none" }}>
                                    <h1 className="border border-info border-2 p-4">
                                        <ul>
                                            <img src={item.img} alt="Article"/>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <button className="beranda5-card rounded-pill px-3 py-2" >
                                                    12 Desember 2021
                                                </button>
                                            </div>
                                        </ul>
                                        <p className="beranda5-judul">
                                            Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
                                        </p>
                                        <p className="beranda5-desc">
                                            Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman . . .
                                        </p>
                                    </h1>
                                </a>
                            ))}
                        </div>


                    </div>

                </section>
            </nav>

        </>

    )
}
