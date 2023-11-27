import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import dataKurikulum from "../data/kurikulum.json"
import dataGaleriBeranda from "../data/galeriBeranda.json"
import dataArtikel from "../data/artikel.json"


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
                <section style={{ position: "relative", backgroundImage: "url('../../asset/beranda/Vector 1.png')", backgroundSize: "cover", backgroundPosition: "top", overflowY: "auto", height: "120vh", marginTop: "-150px", zIndex: 1 }}>
                    <div className='d-flex flex-row justify-content-between' style={{ position: "relative", zIndex: 1000, marginTop: "150px", color: "white", padding: "70px" }}>
                        <div style={{ zIndex: 2, marginTop: "50px" }}>
                            <h1 style={{ fontSize: "45px", width: "550px" }}>Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik</h1>
                            <p style={{ width: "450px", fontSize: "15px" }}>jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat</p>
                            <button className='rounded 4-px px-3 py-1 btn btn-light' style={{ color: '#58C9BF' }}>Daftar Sekarang</button>
                        </div>
                        <div style={{ zIndex: 2 }}>
                            <img src='../../asset/beranda/hero.png' style={{ width: "430px" }} alt="Hero Image" />
                        </div>
                    </div>
                </section>

                <section className='d-flex flex-row justify-content-between' style={{ paddingTop: "50px", padding: "70px" }}>
                    <img src='../../asset/beranda/tentangkami.png' style={{ width: "350px" }}></img>
                    <ul className='justify-content-center my-auto'>
                        <h1 style={{ fontWeight: 'bold' }}>
                            Tentang Kami
                        </h1>
                        <p className='fs-5' style={{ width: "650px", textAlign: 'justify' }}>
                            Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum terbaik agar anak bisa memilih minat nya dan fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang hingga saat ini.
                        </p>
                    </ul>
                </section>

                <section>
                    <div className="position-relative" style={{ backgroundImage: "url('../../asset/beranda/Vector 2.png')", backgroundSize: "cover", backgroundPosition: "top", overflowY: "auto", height: "120vh", marginTop: "-70px", zIndex: -1 }}>
                        <div className="d-flex flex-wrap gap-3" style={{ padding: "70px", paddingTop: "220px", justifyContent: "center", alignItems: "center" }}>
                            {jsonKurikulum.map((item, index) => (
                                <a key={index} href="#" className="group" style={{ textDecoration: "none" }}>
                                    <div>
                                        <ul className='d-flex flex-row gap-3 bg-white rounded 4-px py-5' style={{ width: "500px", height: "180px" }}>
                                            <img src={item.image} style={{ height: "80px" }}></img>
                                            <div>
                                                <h1 className='fs-5' style={{ color: '#1C2661', fontWeight: 'bold' }}>{item.title}</h1>
                                                <p style={{ width: "350px", color: "black", fontSize: '0.90rem' }}>{item.description}</p>
                                            </div>
                                        </ul>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <div style={{ padding: '70px' }}>
                        <h1 style={{ fontWeight: 'bold', marginTop: "50px" }}>Galeri</h1>
                        <h2 className="d-flex justify-content-between">
                            <p className="fs-4" style={{ fontWeight: 'normal' }}>Dokumentasi Sekolah Kami</p>
                            <button className='d-flex align-items-center rounded 4-px py-1 btn btn-primary' style={{ color: 'white', paddingLeft: '20px' }}>
                                Lihat Semua
                                <img src="../../asset/header-footer/next.png" alt="Icon" style={{ width: '30px' }} />
                            </button>
                        </h2>
                        <h3 className="d-flex gap-4">
                            {jsonGaleriBeranda.map((item, index) => (
                                <a key={index} href="#" className="group" style={{ textDecoration: "none" }}>
                                    <img src={item.gambar} style={{ paddingTop: "30px", width: "262px" }}></img>
                                </a>
                            ))}
                        </h3>
                    </div>
                </section>

                <section>
                    <div style={{ padding: "70px" }}>
                        <h1 style={{ fontWeight: 'bold' }}>Artikel</h1>
                        <h2 className="d-flex justify-content-between fs-5" style={{ paddingTop: "20px" }}>
                            <ul className="d-flex gap-5" style={{ fontWeight: 'normal', paddingLeft: 0 }}>
                                <p className="border-bottom border-info border-2" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Semua</p>
                                <p>Berita</p>
                                <p>Kegiatan Sekolah</p>
                            </ul>
                            <ul style={{ color: '#3190DC' }}>
                                Lihat Semua
                                <img src="../../asset/header-footer/next2.png" alt="Icon" style={{ width: '30px', fontWeight: 'normal' }} />
                            </ul>
                        </h2>

                        <div className="d-flex gap-4">
                            {jsonArtikel.map((item, index) => (
                                <a key={index} href="#" className="group" style={{ textDecoration: "none" }}>
                                    <h1 className="border border-info border-2 p-4" style={{ width: "350px", borderRadius: '20px', margin: "10px", marginLeft: 0 }}>
                                        <ul style={{ paddingLeft: 0 }}>
                                            <img src={item.img} alt="Article" style={{ width: '100%' }} />
                                            <div className="d-flex justify-content-center align-items-center">
                                                <button className="rounded-pill fs-6 px-3 py-1" style={{ background: 'linear-gradient(#4BA3EB, #5DDAAA)', color: 'white', border: 'none', position: 'absolute', zIndex: '1' }}>
                                                    12 Desember 2021
                                                </button>
                                            </div>
                                        </ul>
                                        <p className="fs-6" style={{ fontWeight: 'bold', paddingTop: "10px", color: "black" }}>
                                            Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
                                        </p>
                                        <p style={{ fontSize: '14px', fontWeight: 'normal', textAlign: 'justify', color: "black" }}>
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
