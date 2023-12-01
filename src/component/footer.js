import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export class Footer extends Component {
    render() {
        return (
            <main>
                <Container style={{paddingTop: "30px"}}>
                    <Row className="justify-content-between">
                        <Col xs={12} lg={2} className="-mx-6">
                            <div className="px-6">
                                <img src="../../asset/header-footer/footer.png" alt="" />
                                <p className="mt-4" style={{width: "400px", color: '#1C2661'}}>
                                    Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat
                                </p>
                            </div>
                        </Col>

                        <Col lg={6} className="">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                                <div className="col">
                                    <h1 className="mb-4 fs-5 fw-semibold" style={{color: '#1C2661'}}>Informasi</h1>
                                    <p className='d-flex flex-column'>
                                        <a href="#" className="text-decoration-none mb-4" style={{color: "#404040"}}>Artikel</a>
                                        <a href="#" className="text-decoration-none"style={{color: "#404040"}}>Galeri</a>
                                    </p>

                                </div>

                                <div className="col">
                                    <h1 className="mb-4 fs-5 fw-semibold" style={{color: '#1C2661'}}>Tentang</h1>
                                    <p className='d-flex flex-column'>
                                        <a href="#" className="text-decoration-none mb-4"style={{color: "#404040"}}>Tentang kami</a>
                                        <a href="#" className="text-decoration-none"style={{color: "#404040"}}>Hubungi kami</a>
                                    </p>
                                </div>

                                <div className="col">
                                    <h1 className="mb-4 fs-5 fw-semibold" style={{color: '#1C2661'}}>Ikuti Kami</h1>
                                    <a href="#" className="d-flex text-decoration-none mb-4"style={{color: "#404040"}}>
                                        <img src="../../asset/header-footer/fb.png" className=" me-3" alt="Facebook" style={{ height: "17px", marginTop: "5px"}} />
                                        namasekolah
                                    </a>
                                    <a href="#" className="d-flex text-decoration-none mb-4"style={{color: "#404040"}}>
                                        <img src="../../asset/header-footer/tw.png" className=" me-3" alt="Twitter" style={{ height: "17px", marginTop: "5px"}}/>
                                        namasekolah
                                    </a>
                                    <a href="#" className="d-flex text-decoration-none"style={{color: "#404040"}}>
                                        <img src="../../asset/header-footer/ig.png" className=" me-3" alt="Instagram" style={{ height: "17px", marginTop: "5px"}}/>
                                        namasekolah
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <hr className="my-6 border-none" style={{marginTop: "30px"}} />

                    <div>
                        <p className="text-center fs-6">Copyright © 2021. All rights reserved.</p>
                    </div>
                </Container>
            </main>
        );
    }
}
