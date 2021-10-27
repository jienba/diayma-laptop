import Banner from './Banner';
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.svg";
import Recommendation from "./Recommendation";
import {title} from "./Banner";

const App = () => {
    return (<div>
        <Banner>
            <img src={logo} alt="univers-laptop" className='dlp-logo'/>
            <h1>{title}</h1>
            <Recommendation/>
        </Banner>
        {/*<Cart/>*/}
        <ShoppingList/>
    </div>)
}

export default App
