import '../styles/Cart.css';
import {useState} from "react";

const Cart = () => {
    const [cart, updateCart] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const monsteraPrice = 8

    return isOpen ? (<div className='dlp-cart'>
            <button className='dlp-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
            <br/>
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {monsteraPrice}€</li>
                <button onClick={() => updateCart(cart + 1)}>Ajouter</button>

            </ul>
            <h3>Total : {monsteraPrice * cart} FCFA </h3>
            <button onClick={() => updateCart(0)}>Vider le panier</button>

        </div>) :
        (
            <div className='dlp-cart-closed'>
                <button className='dlp-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
            </div>
        )

}

export default Cart
