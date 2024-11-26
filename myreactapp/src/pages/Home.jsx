import Home from '../assets/Home.jpg';
import '../styles/home.css';

function Homepage () {

return (
    <div className='container'>
         <div className='homeContainer'>
            <img src={Home} alt="Winter cabin in the forest" className="cabinPic" />
            
        </div>
        
    </div>

);

}
    
export default Homepage;