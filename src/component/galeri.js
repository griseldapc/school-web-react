import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import dataGaleri from "../data/galeri.json"
import { Link } from 'react-router-dom';


export default function Galeri() {
  const [jsonGaleri, setJsonGaleri] = useState([]);

  useEffect(() => {
    setJsonGaleri(dataGaleri);
  }, []);

  return (
    <>
      <nav>
      <section style={{ position: "relative", backgroundImage: "url('../../asset/beranda/Vector 1.png')", backgroundSize: "cover", backgroundPosition: "top", overflowY: "auto", height: "120vh", marginTop: "-200px", zIndex: 1 }}>
        <div className='d-flex flex-row justify-content-between' style={{ position: "relative", zIndex: 1000, marginTop: "130px", color: "white", padding: "70px" }}>
          <div style={{ zIndex: 2, marginTop: "100px" }}>
            <h1 style={{ fontSize: "50px", width: "550px" }}>Galeri</h1>
            <p style={{ width: "500px", fontSize: "18px" }}>Beberapa hasil dokumentasi area sekolah dan kegiatan siswa di sekolah </p>
          </div>
          <div style={{ zIndex: 2 }}>
            <img src='../../asset/galeri/galeri.png' style={{ width: "450px" }} alt="Hero Image" />
          </div>
        </div>
      </section>

        <section style={{ marginTop: "50px", padding: "70px" }}>
          <div className="d-flex justify-content-center align-items-center gap-5 fs-5" style={{ marginBottom: "50px" }}>
            <p style={{ fontWeight: "bolder", borderBottom: "3px solid #3190DC", width: "150px", display: "inline-block", textAlign: "center", paddingBottom: "10px" }}>Semua</p>
            <p style={{ marginTop: "-10px" }}>Gedung</p>
            <p style={{ marginTop: "-10px" }}>Kegiatan Sekolah</p>
          </div>

          <div className="d-flex flex-wrap gap-4">
            {jsonGaleri.map((item, index) => (
              <a key={index} href="#" class="group">
                <h1 style={{ position: "relative", marginTop: "-5px" }}>
                  <img src={item.img} style={{ height: "286px" }} alt="Galeri" />
                  <p className="position-absolute bottom-0 left-0 right-0 opacity-100" style={{ height: "150px", width: "357px", backgroundImage: "linear-gradient(180.13deg, rgba(255, 255, 255, 0) 54.94%, rgba(65, 118, 210, 0.576875) 90.77%, rgba(57, 113, 208, 0.6) 99.89%)", textAlign: "center", color: "white", paddingTop: "115px", margin: "0", borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", fontSize: "18px" }}>
                    {item.text}
                  </p>
                </h1>
              </a>
            ))}
          </div>

          <div className="d-flex justify-content-between" style={{ marginTop: "30px" }}>
            <h1 style={{ fontSize: "16px" }}>Menampilkan 10 Dari 21 Data</h1>
            <h2 className="d-flex">
              <p style={{ fontSize: "16px" }}>Halaman</p>
              <ul className="d-flex gap-4">
                <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" style={{ transform: "rotate(90deg)", height: "20px" }}></img>
                <Link to="/">
                <p style={{ fontSize: "16px", color: "#3190DC", fontWeight: "bolder"}}>1</p>
                </Link>
                <p style={{ fontSize: "16px" }}>2</p>
                <p style={{ fontSize: "16px" }}>3</p>
                <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" style={{ transform: "rotate(-90deg)", height: "20px" }}></img>
              </ul>



            </h2>
          </div>
        </section>
      </nav>

    </>

  )
}
