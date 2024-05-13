import './App.css';
import Detail from './components/detail_filling_page/detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Aboutus from './components/about_us_page/aboutus';
import Previewpage from './components/preview_page/preview';
import Mytemplates from './components/homepage/my_templates';

function App() {
  return (
    <BrowserRouter basename="/Group-3-Resume-Generator-App">
      <Routes>
        <Route path='/' element={<Mytemplates />} />
        <Route path='det' element={<Detail />} />
        <Route path="prev" element={<Previewpage />} />
        <Route path='/AboutUs' element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
