import {Link} from 'react-router-dom';
import Gallery from '../components/Gallery';
import home from '../home.jsx';
import About from './pages/about.jsx';

function Navbar () {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;