import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "../data/kurikulum.json"


export default function Beranda() {

    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(data); //menggunakan data dari kurikulum.json
    }, []);

    return (
        <>
            <nav>
                <section className='d-flex flex-row justify-content-between' style={{ marginTop: "-550px", color: "white", padding: "70px" }}>
                    <div style={{ zIndex: 1000 }}>
                        <h1 style={{ width: "500px" }}>Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik</h1>
                        <p style={{ width: "400px" }}>jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat</p>
                        <button className='rounded 4-px px-3 py-1 btn btn-light' style={{ color: '#58C9BF' }}>Daftar Sekarang</button>
                    </div>
                    <div>
                        <img src='../../asset/beranda/hero.png' style={{ width: "400px" }} alt="Hero Image" />
                    </div>
                </section>

                <section className='d-flex flex-row justify-content-between' style={{ paddingTop: "150px", padding: "70px" }}>
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
                    <div style={{ backgroundImage: "url('../../asset/beranda/Vector 2.png')", backgroundSize: "cover", backgroundPosition: "top", overflowY: "auto", height: "120vh", marginTop: "-70px", zIndex: -1 }}>
                        <div className="d-flex flex-wrap gap-3" style={{padding: "70px", paddingTop: "220px", justifyContent: "center", alignItems: "center"}}>
                             {jsonData.map((item, index) => (
                            <a key={index} href="#" className="group" style={{ textDecoration: "none" }}>
                                <div>
                                    <ul className='d-flex flex-row gap-3 bg-white rounded 4-px py-5' style={{ width: "500px", height: "180px" }}>
                                        <img src={item.image} style={{ height: "80px" }}></img>
                                        <div>
                                            <h1 className='fs-5' style={{ color: '#1C2661', fontWeight: 'bold' }}>{item.title}</h1>
                                            <p className='fs-6' style={{ width: "350px", color: "black" }}>{item.description}</p>
                                        </div>
                                    </ul>
                                </div>
                            </a>
                        ))}
                        </div>
                    </div>
                </section>
            </nav>

        </>

    )
}
