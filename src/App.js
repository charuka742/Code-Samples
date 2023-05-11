import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Clock from './Template/Clock';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<> <Navbar/> <Main/> <Footer/> </>}>
          {/* <Route index element={<Home/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Route>
      <Route path="/Clock" element={<Clock />} />
      

    </Routes>
    </BrowserRouter>
  )
}

export default App