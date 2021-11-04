import '../styles/Banner.css';
const title = "Diayma Laptop";

const Banner = ({children}) => {

    return (<div className="dlp-banner">
        {children}
    </div>)
}

export {title}
export default Banner
