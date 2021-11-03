import '../styles/LaptopItem.css'
import Configuration from "./ConfigurationLaptop"

const LaptopItem = ({id, name, cover, processor, frequency, rate, typeStockage}) => {
    return (
        <li key={id} className='dlp-laptop-item' >
            <img className="dlp-laptop-item-cover" src={cover} alt={`${name} cover`}/>
            <span>{name}</span>
            <div>
                <Configuration
                    processor={processor}
                    frequency={frequency + ' Ghz'}
                    rate={rate}
                    typeStockage={typeStockage}
                />
            </div>
        </li>
    )
}

const handleClick = (e) => {
    // alert(`Vous voulez acheter 1  ${name}? `)
    console.log('✨ Ceci est mon event :', e)
}

export default LaptopItem
