import {laptopList} from "../datas/laptopList";
import '../styles/ShoppingList.css';
import Configuration from "./ConfigurationLaptop";


const stockageType = [...new Set(laptopList.map(laptop => laptop.typeStockage))];


const ShoppingList = () => {
    return (
        <div>
            <ul>
                {stockageType.map(typeDisk =>
                    <li key={typeDisk}>{typeDisk}</li>
                )}
            </ul>
            <ul className='dlp-laptop-list'>
                {laptopList.map(laptop =>
                    <li key={laptop.id} className='dlp-laptop-item'>
                        {laptop.name}
                        {laptop.isBestSale && <span className='dlp-best-sale'>🔥</span>}
                        {laptop.isSpecialOffer && <div className='dlp-sales'>Soldes</div>}
                        <Configuration
                            processor={laptop.processor}
                            frequency={laptop.frequency + ' Ghz'}
                            rate={laptop.rate}/>
                    </li>

                )}
            </ul>
        </div>

    )
}

export default ShoppingList
