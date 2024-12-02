import Gallery from './components/Gallery.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Navbar from './pages/navbar.jsx';
import Footer from './pages/footer.jsx';
import Counter from './pages/counter.jsx';
import Color from './pages/color.jsx';
import Practise from './pages/practise.jsx';
import TodoList from './pages/todoList.jsx';



function App () {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Gallery/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/color" element={<Color/>} />
        <Route path="/practise" element={<Practise/>} />
        <Route path="/todoList" element={<TodoList/>} />
        
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
 

      {/*... */}
    </div>
  );
}

export default App;