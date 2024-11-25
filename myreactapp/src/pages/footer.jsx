import {Link} from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';
import home from '../pages/home.jsx';
import about from '../pages/about.jsx';
import '../styles/footer.css';

function Footer () {
    return (
        <div className="footer">
            <nav className="navfooter">
                <ul className='list'>
                    <li className='footerLink'><Link to="/" className='navFooter'>Home</Link></li>
                    <li className="footerLink"><Link to="/About">About</Link></li>
                    <li className="footerLink"><Link to="/">Find us</Link></li>
                    <li className="footerLink"><Link to="/">Facebook link</Link></li> 
                    <li className="footerLink"><Link to="/">LinkedIn link</Link></li>
                    <li className="footerLink"><Link to="/">Instagram link</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Footer;