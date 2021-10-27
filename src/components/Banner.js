import '../styles/Banner.css';
const title = "L'univers du Laptop";

const Banner = ({children}) => {

    return (<div className="dlp-banner">
        {children}
    </div>)
}

export {title}
export default Banner
