import {laptopList} from "../datas/laptopList";
import '../styles/ShoppingList.css';
import LaptopItem from "./LaptopItem";
import Categories from "./Categories";
import {useState} from "react";


const ShoppingList = ({cart, updateCart}) => {
    const stockageType = [...new Set(laptopList.map(laptop => laptop.typeStockage))]
    const [diskType, setDiskType] = useState('');

    let listLaptopFiltered = laptopList.filter(laptop => laptop.typeStockage === diskType )
    if (diskType === '') {
        listLaptopFiltered = laptopList
    }

    const addToCart = (name, price) => {
        const currentLaptopSaved = cart.find(laptop => laptop.name === name)

        if (currentLaptopSaved) {
            const cartFilteredCurrentLaptop = cart.filter(laptop => laptop.name !== name)
            updateCart([...cartFilteredCurrentLaptop, {name, price, amount: currentLaptopSaved.amount + 1}])
            console.log(cart)
        } else {
            updateCart([...cart, {name, price, amount: 1}])
            console.log(cart)
        }

    }

    return (
        <div>

            <Categories
                stockageType={stockageType}
                setDiskType={setDiskType}

            />

            <ul className='dlp-laptop-list'>
                {
                    // laptopList.map(({id, cover, name, processor, frequency, rate, typeStockage, price}) => (
                    listLaptopFiltered.map(({id, cover, name, processor, frequency, rate, typeStockage, price}) => (
                            <div key={id}>
                                <LaptopItem
                                    cover={cover}
                                    name={name}
                                    processor={processor}
                                    frequency={frequency}
                                    rate={rate}
                                    typeStockage={typeStockage}
                                    price={price}
                                />
                                <button className='dlp-add-button' onClick={() => addToCart(name, price)}>Ajouter</button>
                            </div>


                        )
                    )
                }
            </ul>
        </div>

    )
}

export default ShoppingList
