import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Allurls from './pages/AllUrls';
import Decode from './pages/DecodeUrls';
import Encode from './pages/EncodeUrls';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Encode />} />
        <Route path="/decode" element={<Decode />} />
        <Route path="/allUrls" element={<Allurls />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
