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
                        <div style={{ zIndex: 2 }}>
                            <h1 style={{ fontSize: "48px" }}>Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik</h1>
                            <p style={{ maxWidth: "600px", fontSize: "20px" }}>jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat</p>
                            <button className='rounded 4-px px-3 py-2 btn btn-light fw-semibold' style={{ color: '#58C9BF' }}>Daftar Sekarang</button>
                        </div>
                        <div style={{ zIndex: 2 }}>
                            <img src='../../asset/beranda/hero.png' className="pr-10" style={{ width: "430px" }} alt="Hero Image" />
                        </div>
                    </div>
                </section>

                <section className='d-flex flex-row justify-content-between' style={{ paddingTop: "50px", padding: "70px" }}>
                    <img src='../../asset/beranda/tentangkami.png' style={{ width: "350px" }}></img>
                    <ul className='justify-content-center my-auto'>
                        <h1 style={{ fontWeight: 'bold', fontSize: "50px" }}>
                            Tentang Kami
                        </h1>
                        <p className='fs-5' style={{ width: "650px", textAlign: 'justify' }}>
                            Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum terbaik agar anak bisa memilih minat nya dan fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang hingga saat ini.
                        </p>
                    </ul>
                </section>

                <section>
                    <div className="position-relative" style={{ backgroundImage: "url('../../asset/beranda/Vector 2.png')", backgroundSize: "cover", backgroundPosition: "top", height: "120vh", marginTop: "-70px", zIndex: -1 }}>
                        <div className="d-flex flex-wrap gap-3" style={{ padding: "70px", paddingTop: "220px", justifyContent: "center", alignItems: "center" }}>
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
                    <div style={{ padding: '70px' }}>
                        <h1 style={{ fontWeight: 'bold', marginTop: "20px", fontSize: "50px" }}>Galeri</h1>
                        <h2 className="d-flex justify-content-between">
                            <p style={{ fontWeight: 'normal', fontSize: "20px", color: '#1C2661' }}>Dokumentasi Sekolah Kami</p>
                            <button className='d-flex align-items-center rounded 4-px btn btn-primary' style={{ background: '#3190DC', color: 'white', paddingLeft: '20px', fontSize: "17px" }}>
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
                    <div style={{ padding: "70px", marginTop: "-30px" }}>
                        <h1 style={{ fontWeight: 'bold', fontSize: "50px" }}>Artikel</h1>
                        <h2 className="d-flex justify-content-between fs-5" style={{ paddingTop: "20px" }}>
                            <ul className="d-flex gap-5" style={{ fontWeight: 'normal', paddingLeft: 0 }}>
                                <p className="border-bottom border-info border-2" style={{ fontWeight: 'bold', marginBottom: '5px', color: '#404040', borderColor: '#3190DC', width: "100px", textAlign: 'center', fontSize: "20px" }}>Semua</p>
                                <p style={{ color: '#404040', fontSize: "20px" }}>Berita</p>
                                <p style={{ color: '#404040', fontSize: "20px" }}>Kegiatan Sekolah</p>
                            </ul>
                            <ul style={{ color: '#3190DC' }}>
                                Lihat Semua
                                <img src="../../asset/header-footer/next2.png" alt="Icon" style={{ width: '30px', fontWeight: 'normal', fontSize: "20px"  }} />
                            </ul>
                        </h2>

                        <div className="d-flex gap-4">
                            {jsonArtikel.map((item, index) => (
                                <a key={index} href="#" className="group" style={{ textDecoration: "none" }}>
                                    <h1 className="border border-info border-2 p-4" style={{ width: "350px", borderRadius: '20px', margin: "10px", marginLeft: 0, height: "420px" }}>
                                        <ul style={{ paddingLeft: 0 }}>
                                            <img src={item.img} alt="Article" style={{ width: '100%' }} />
                                            <div className="d-flex justify-content-center align-items-center">
                                                <button className="rounded-pill px-3 py-2" style={{ background: 'linear-gradient(#4BA3EB, #5DDAAA)', color: 'white', border: 'none', position: 'absolute', zIndex: '1', fontSize: "14px" }}>
                                                    12 Desember 2021
                                                </button>
                                            </div>
                                        </ul>
                                        <p style={{ fontWeight: 'bold', paddingTop: "17px", color: '#1C2661', fontSize: "17px" }}>
                                            Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
                                        </p>
                                        <p style={{ fontSize: '14px', fontWeight: 'normal', textAlign: 'justify', color: '#3A3B41' }}>
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
