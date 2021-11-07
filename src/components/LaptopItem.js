import '../styles/LaptopItem.css'
import Configuration from "./ConfigurationLaptop"

const LaptopItem = ({name, cover, processor, frequency, rate, typeStockage, price}) => {
    return (
        <li  className='dlp-laptop-item' >
            <span className='dlp-laptop-item-price'>{new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(price)} </span>
            <img className="dlp-laptop-item-cover" src={cover} alt={`${name} cover`}/>
            <div>
                <Configuration
                    name={name}
                    processor={processor}
                    frequency={frequency + ' Ghz'}
                    rate={rate}
                    typeStockage={typeStockage}
                />
            </div>
        </li>
    )
}



export default LaptopItem
