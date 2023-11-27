import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Routes
import { Helmet } from 'react-helmet';
import './App.css';
import Navbar from './component/navbar';
import Beranda from './component/beranda';
import Tentang from './component/tentang';
import Galeri from './component/galeri';
import Artikel from './component/artikel';
import Kontak from './component/kontak';
import DetailArtikel from './component/detailArtikel';
import { Footer } from './component/footer';

export default function App() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </Helmet>
      <div className='poppins-font'>
        <Navbar />
        {/* <Beranda /> */}
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/detailArtikel" element={<DetailArtikel />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
