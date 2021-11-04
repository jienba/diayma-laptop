import Banner from './Banner';
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.svg";
import Recommendation from "./Recommendation";
import QuestionForm from "./QuestionForm";
import {title} from "./Banner";
import Footer from "./Footer";
import {useState} from "react";
import '../styles/Layout.css'

const App = () => {
    const [cart, updateCart] = useState([]);
    return (<div>
        <Banner>
            <h1>
                <img src={logo} alt="univers-laptop" className='dlp-logo'/>
                {title}
            </h1>
            <Recommendation/>
        </Banner>
        {/*<QuestionForm/>*/}
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


const handlingClick = (e) => {
    e.preventDefault()
    console.log('✨ Ceci est mon event :', e)
    alert(e.target['my_input'].value)
}
export default App
