import {laptopList} from "../datas/laptopList";
import '../styles/ShoppingList.css';


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
                    </li>
                )}
            </ul>
        </div>

    )
}

export default ShoppingList
