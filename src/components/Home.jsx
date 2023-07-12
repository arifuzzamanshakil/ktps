import React from 'react'
import Navbar from './layouts/Navbar';
import Header from './Header';
import Details from './Details';
import Checklist from './Checklist';
import Unpack from './Unpack';
import Footer from './layouts/Footer';

const Home = () => {
 return (
  <div className="home">
   <Navbar />
   <div className="">
    <div className='header'>
     <Header />
    </div>
    <div className='main bg-no-repeat bg-cover bg-center'>
     <section id='details'>
      <Details />
     </section>
     <section id='checklist'>
      <Checklist />
     </section>
     <section id='unpack'>
      <Unpack />
     </section>
     <section id='footer'>
      <Footer/>
     </section>
    </div>
   </div>
  </div>
 );
};

export default Home;