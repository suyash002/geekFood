import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import Card from '../components/card';
import MiddleCont from '../components/middleCont';
import HeroSec from '../components/heroSec';

const Home = () => {
  return (
    <>
    {/* Navbar */}
    <Navbar />
    <HeroSec />
     {/* Card */}
     <MiddleCont />
     <div className="min-h-screen mt-6">
     <Card />
     </div>
  {/* Footer */}
    <Footer />
    </>
  )
}

export default Home