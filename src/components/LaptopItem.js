import '../styles/LaptopItem.css'
import Configuration from "./ConfigurationLaptop";
const LaptopItem = ({id, name, cover, processor, frequency, rate}) => {
    return (
        <li key={id} className='dlp-laptop-item'>
            <img className="dlp-laptop-item-cover" src={cover} alt={`${name} cover`}/>
            <span>{name}</span>
            <div>
                <Configuration
                    processor={processor}
                    frequency={frequency + ' Ghz'}
                    rate={rate}
                />
            </div>
        </li>
    )
}

export default  LaptopItem
