import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../dist/css/footer.css';

export class Footer extends Component {
    render() {
        return (
            <main>
                <Container className='footer'>
                    <Row className="cover-footer justify-content-between">
                        <Col xs={12} lg={2} className="judul-footer -mx-6">
                            <div className="bungkus-footer px-6">
                                <img src="../../asset/header-footer/footer.png" alt="" />
                                <p className="text-footer mt-4">
                                    Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat
                                </p>
                            </div>
                        </Col>

                        <Col lg={6} className="informasi">
                            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
                                <div className="col-informasi">
                                    <h1 className="bungkus-informasi mb-4 fs-5 fw-semibold">Informasi</h1>
                                    <p className='menu-informasi d-flex flex-column'>
                                        <a href="#" className="menu text-decoration-none mb-4">Artikel</a>
                                        <a href="#" className="menu text-decoration-none">Galeri</a>
                                    </p>

                                </div>

                                <div className="col-tentang">
                                    <h1 className="bungkus-tentang mb-4 fs-5 fw-semibold">Tentang</h1>
                                    <p className='menu-tentang d-flex flex-column'>
                                        <a href="#" className="menu text-decoration-none mb-4">Tentang kami</a>
                                        <a href="#" className="menu text-decoration-none">Hubungi kami</a>
                                    </p>
                                </div>

                                <div className="col-ikuti">
                                    <h1 className="bungkus-ikuti mb-4 fs-5 fw-semibold">Ikuti Kami</h1>
                                    <a href="#" className="menu-ikuti d-flex text-decoration-none mb-4">
                                        <img src="../../asset/header-footer/fb.png" className="logo-sekolah me-3" alt="Facebook"/>
                                        namasekolah
                                    </a>
                                    <a href="#" className="menu-ikuti d-flex text-decoration-none mb-4">
                                        <img src="../../asset/header-footer/tw.png" className="logo-sekolah me-3" alt="Twitter"/>
                                        namasekolah
                                    </a>
                                    <a href="#" className="menu-ikuti d-flex text-decoration-none">
                                        <img src="../../asset/header-footer/ig.png" className="logo-sekolah me-3" alt="Instagram"/>
                                        namasekolah
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <hr className="garis my-6 border-none"/>

                    <div>
                        <p className="copy text-center ">Copyright © 2021. All rights reserved.</p>
                    </div>
                </Container>
            </main>
        );
    }
}
