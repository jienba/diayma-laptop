import '../styles/Cart.css';
import {useState} from "react";

const Cart = ({cart, updateCart}) => {
    const [isOpen, setIsOpen] = useState(true);
    const total = cart.reduce((acc, laptop) => acc + laptop.price * laptop.amount, 0)


    return isOpen ? (<div className='dlp-cart'>
            <button className='dlp-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
            <br/>
            {cart.length > 0 ?
                (<div>
                        <h2>Panier</h2>
                        <ul>
                            {
                                cart.map(({name, price, amount}, index) => (
                                        <div key={`${name}-${index}`}>
                                            {name} {price} Fcfa x {amount}
                                        </div>
                                    )
                                )
                            }
                        </ul>
                        <h3>Total : {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(total)} FCFA </h3>
                        <button onClick={() => updateCart([])}>Vider le panier</button>
                    </div>

                ) :
                <div>
                    Votre panier est vide
                </div>
            }


        </div>) :
        (
            <div className='dlp-cart-closed'>
                <button className='dlp-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
            </div>
        )

}

export default Cart
