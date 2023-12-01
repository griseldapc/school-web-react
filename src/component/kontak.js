import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default class Kontak extends React.Component {
  render() {
    return (
      <nav>
        <section style={{ position: "relative", backgroundImage: "url('../../asset/beranda/Vector 1.png')", backgroundSize: "cover", backgroundPosition: "top", overflowY: "auto", height: "130vh", marginTop: "-200px", zIndex: 1 }}>
          <div className='d-flex flex-row justify-content-between' style={{ position: "relative", zIndex: 1000, marginTop: "130px", color: "white", padding: "70px" }}>
            <div style={{ zIndex: 2, marginTop: "100px" }}>
              <h1 style={{ fontSize: "60px", width: "550px" }}>Hubungi Kami</h1>
              <p style={{ width: "500px", fontSize: "20px" }}>Kontak sekolah kami agar anda dapat terhubung dengan kami</p>
            </div>
            <div style={{ zIndex: 2 }}>
              <img src='../../asset/kontak/amico.png' style={{ width: "460px", marginTop: "60px" }} alt="Hero Image" />
            </div>
          </div>
        </section>

        <section style={{ padding: "70px" }}>
          <div>
            <h1 style={{ fontSize: "20px", textAlign: 'center', color: '#1C2661', fontWeight: "inherit" }}>Dapatkan informasi lebih lengkap</h1>
            <h2 style={{ fontSize: "50px", fontWeight: 'bold', textAlign: 'center' }}>Kontak Kami</h2>
          </div>


          <div className="d-flex justify-content-between" style={{ paddingTop: "80px" }}>
            <ul>
              <h1 className="d-flex align-items-center gap-4 py-3" style={{ marginLeft: "-30px" }}>
                <img className="align-items-center" src="../../asset/kontak/phone.png" style={{ width: "70px", marginTop: "-10px" }}></img>
                <span style={{ color: '#3A3B41' }}>
                  <p className="align-items-center" style={{ fontSize: "18px" }}>(+62) 812 698 15172</p>
                  <p className="align-items-center" style={{ fontSize: "18px" }}>(0341) 545 987</p>
                </span>
              </h1>

              <h2 className="d-flex align-items-center gap-4 py-3" style={{ marginLeft: "-30px" }}>
                <img className="align-items-center" src="../../asset/kontak/email.png" style={{ width: "70px", marginTop: "-10px" }}></img>
                <span style={{ color: '#3A3B41' }}>
                  <p className="align-items-center" style={{ fontSize: "18px" }}>contact@sekolahanak.Com</p>
                  <p className="align-items-center" style={{ fontSize: "18px" }}>info@sekolah.anak.com</p>
                </span>
              </h2>

              <h3 className="d-flex align-items-center gap-4 py-3" style={{ marginLeft: "-30px" }}>
                <img className="align-items-center" src="../../asset/kontak/location.png" style={{ width: "70px", marginTop: "-10px" }}></img>
                <span style={{ color: '#3A3B41' }}>
                  <p className="align-items-center" style={{ fontSize: "18px" }}>JL. Soekarno hatta J-12</p>
                  <p className="align-items-center" style={{ fontSize: "18px" }}>Malang</p>
                </span>
              </h3>
            </ul>

            <ul className="">
              <h1>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="name" className="border border-info" placeholder="Nama Anda*" style={{ height: "50px", fontSize: "14px" }} />
                </Form.Group>
              </h1>


              <h2 style={{ marginTop: "30px" }}>
                <Form.Group className="mb-3"  controlId="formBasicEmail">
                  <Form.Control type="email" className="border border-info" placeholder="Email Anda*" style={{ height: "50px", fontSize: "14px" }}/>
                </Form.Group>
              </h2>

              <h3 style={{ marginTop: "30px" }}>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Control type="phone" className="border border-info" placeholder="Nomor Telepon" style={{ height: "50px", fontSize: "14px" }}/>
                </Form.Group>
              </h3>

              <h4 style={{ marginTop: "30px" }}>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Control as="textarea" className="border border-info" type="message" placeholder="Pesan Anda*" style={{ height: "150px", fontSize: "14px" }}/>
                </Form.Group>
              </h4>

              <Button variant="info" style={{ width: "600px", color: "white", background: '#3190DC', height: "50px", fontSize: "16px" }}>Kirim Pesan</Button>


            </ul>
          </div>
        </section>
      </nav>

    );
  }
}
