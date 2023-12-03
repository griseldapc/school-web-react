import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../dist/css/kontak.css';

export default class Kontak extends React.Component {
  render() {
    return (
      <nav>
        <section className="hero"
          style={{ backgroundImage: "url('../../asset/beranda/Vector 1.png')" }}>
          <div className='gambar d-lg-flex d-md-flex flex-row justify-content-between'>
            <div className="text">
              <h1>Hubungi Kami</h1>
              <p>Kontak sekolah kami agar anda dapat terhubung dengan kami</p>
            </div>
            <div className="kontak">
              <img src='../../asset/kontak/amico.png' alt="Hero Image" />
            </div>
          </div>

        </section>

        <section className="form">
            <h1>Dapatkan informasi lebih lengkap</h1>
            <h2>Kontak Kami</h2>


          <div className="icon d-lg-flex d-md-flex justify-content-between">
            <ul>
            <div className="telepon d-flex align-items-center gap-lg-4 gap-md-4 gap-3 py-3">
                <img className="align-items-center" src="../../asset/kontak/phone.png"></img>
                <span>
                  <p className="align-items-center">(+62) 812 698 15172</p>
                  <p className="align-items-center">(0341) 545 987</p>
                </span>
              </div>

              <div className="email d-flex align-items-center gap-lg-4 gap-md-4 gap-3 py-3">
                <img className="align-items-center" src="../../asset/kontak/email.png"></img>
                <span>
                  <p className="align-items-center">contact@sekolahanak.Com</p>
                  <p className="align-items-center">info@sekolah.anak.com</p>
                </span>
              </div>

              <div className="lokasi d-flex align-items-center gap-lg-4 gap-md-4 gap-3 py-3">
                <img className="align-items-center" src="../../asset/kontak/location.png"></img>
                <span style={{ color: '#3A3B41' }}>
                  <p className="align-items-center">JL. Soekarno hatta J-12</p>
                  <p className="align-items-center">Malang</p>
                </span>
              </div>
            </ul>



            <div className="form2">
              <h1 className="nama2">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="name" className="border border-info" placeholder="Nama Anda*" />
                </Form.Group>
              </h1>


              <h2 className="email2">
                <Form.Group className="mb-3"  controlId="formBasicEmail">
                  <Form.Control type="email" className="border border-info" placeholder="Email Anda*"/>
                </Form.Group>
              </h2>

              <h3 className="telepon2">
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Control type="phone" className="border border-info" placeholder="Nomor Telepon"/>
                </Form.Group>
              </h3>

              <h4 className="pesan">
                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Control as="textarea" className="border border-info" type="message" placeholder="Pesan Anda*"/>
                </Form.Group>
              </h4>

              <Button variant="info">Kirim Pesan</Button>


            </div>
          </div>
        </section>
      </nav>

    );
  }
}
