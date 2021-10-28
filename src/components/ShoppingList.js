import {laptopList} from "../datas/laptopList";
import '../styles/ShoppingList.css';
import LaptopItem from "./LaptopItem";

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
                {
                    laptopList.map(({id, cover, name, processor, frequency, rate}) => (
                            <LaptopItem
                                id={id}
                                cover={cover}
                                name={name}
                                processor={processor}
                                frequency={frequency}
                                rate={rate}
                            />
                        )
                    )
                }
            </ul>
        </div>

    )
}

export default ShoppingList
