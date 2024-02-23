import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Works from './routes/Works';
import Footer from './component/Footer';
import Career from './routes/Career';
import WebDev from './container/WebDev';
import MobileDev from './container/MobileDev';
import UiUx from './container/UiUx';
import GenerativeAI from './container/GenerativeAI';
import SplashScreen from './SplashScreen'

export default function App() {
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   // Simulate an API call or any asynchronous operation
  //   const fakeApiCall = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 2200)); // Simulating a 2-second delay
  //     setLoading(false)
  //   };

  //   fakeApiCall();
  // }, []);
  return (<>
    {
      loading ?
        <SplashScreen  onClose={()=> setLoading(false)} />
        :
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Works />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/career' element={<Career />} />
            <Route path='/service/web-development' element={<WebDev />} />
            <Route path='/service/mobile-development' element={<MobileDev />} />
            <Route path='/service/ui-ux-development' element={<UiUx />} />
            <Route path='/service/ai-generative' element={<GenerativeAI />} />
          </Routes>
          <Footer />
        </>}
  </>
  );
}
