import '../styles/Banner.css';
import logo from '../assets/logo.svg';
import Recommendation from "./Recommendation";

const Banner = () => {
    const title = "L'univers du Laptop";

    return (<div className="dlp-banner">
        <h1>
            <img src={logo} alt="univers-laptop" className='dlp-logo'/>
            {title}
        </h1>
        <Recommendation/>
    </div>)
}


export default Banner
