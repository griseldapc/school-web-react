import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Beranda  from './component/beranda';
import { Helmet } from 'react-helmet';



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
      <Beranda />
      </div>
     
      
    </>
  );
}

