import Banner from './Banner';
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.svg";
import Recommendation from "./Recommendation";
import {title} from "./Banner";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import '../styles/Layout.css'

const App = () => {
    const saveCard = localStorage.getItem('cart')

    const [cart, updateCart] = useState(saveCard? JSON.parse(saveCard) : [] )

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);


    return (<div>
        <Banner>
            <h1>
                <img src={logo} alt="univers-laptop" className='dlp-logo'/>
                {title}
            </h1>
            <Recommendation/>
        </Banner>
        <div className='dlp-layout-inner'>
            <Cart cart={cart} updateCart={updateCart}/>
            <ShoppingList
                cart={cart}
                updateCart={updateCart}
            />
        </div>

        <Footer/>
    </div>)
}



export default App
