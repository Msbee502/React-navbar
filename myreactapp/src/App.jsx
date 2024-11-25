import Gallery from './components/Gallery.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Navbar from './pages/navbar.jsx';
import Footer from './pages/footer.jsx';

function App () {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Gallery />} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
 

      {/*... */}
    </div>
  );
}

export default App;