import Gallery from './components/Gallery.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';


function App () {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Gallery />} />
      </Routes>
      </BrowserRouter>
 

      {/*... */}
    </div>
  );
}

export default App;