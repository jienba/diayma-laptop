import '../styles/Banner.css';
import logo from '../assets/logo.svg';

const Banner = () => {
    const title = "L'univers du Laptop";
    return (<div className="dlp-banner">
        <img src={logo} alt="univers-laptop" className='dlp-logo'/>
        <h1>{title}</h1>
    </div>)
}


export default Banner
