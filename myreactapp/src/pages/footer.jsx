import {Link} from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';
import home from '../pages/home.jsx';
import about from '../pages/about.jsx';
import '../styles/footer.css';

function Footer () {
    return (
        <div className="footer">
            <nav className="navfooter">
                <ul>
                    <li className='navFooter'><Link to="/" className='navFooter'>Home</Link></li>
                    <li className="navfooter"><Link to="/About">About</Link></li>
                    <li className="navfooter"><Link to="/">Find us</Link></li>
                    <li className="navfooter"><Link to="/">Facebook link</Link></li> 
                    <li className="navfooter"><Link to="/">LinkedIn link</Link></li>
                    <li className="navfooter"><Link to="/">Instagram link</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Footer;