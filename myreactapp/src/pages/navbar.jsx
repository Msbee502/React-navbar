import {Link} from 'react-router-dom';
import '../styles/navbar.css';

function Navbar () {
    return (
        <header>
        <div className="navContainer">   
            <nav className="navbar">
                <ul className="list">
                    <li className="navLink"><Link to="/">Home</Link></li>
                    <li className="navLink"><Link to="/About">About</Link></li>
                    <li className="navLink"><Link to="/Gallery">Gallery</Link></li>
                    <li className="navLink"><Link to="/Counter">Counter</Link></li>
                    <li className="navLink"><Link to="/Color">Pick a color</Link></li>
                    <li className="navLink"><Link to="/todoList">TodoList</Link></li>
                   
                </ul>
         </nav>
    </div>
    </header>
      

    );
}

export default Navbar;


  /* <div className="navbar">
            <nav className="navContainer">
                <ul className="list">
                    <li className="navLink"><Link to="/">Home</Link></li>
                    <li className="navLink"><Link to="/About">About</Link></li>
                    <li className="navLink"><Link to="/Gallery">Gallery</Link></li>
                </ul>
            </nav> */