import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from './components/navbar';
import Allurls from './pages/All-Urls';
import Decode from './pages/Decode-Urls';
import Encode from './pages/Encode-Urls';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Encode />} />
      <Route path='/decode' element={<Decode />} />
      <Route path='/allUrls' element={<Allurls />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
