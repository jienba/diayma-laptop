import Banner from './Banner';
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.svg";
import Recommendation from "./Recommendation";
import QuestionForm from "./QuestionForm";
import {title} from "./Banner";
import Footer from "./Footer";

const App = () => {
    return (<div>
        <Banner>
            <img src={logo} alt="univers-laptop" className='dlp-logo'/>
            <h1>{title}</h1>
            <Recommendation/>
        </Banner>
        {/*<QuestionForm/>*/}
        <Cart/>
        <ShoppingList/>
        <Footer/>
    </div>)
}


const handlingClick = (e) => {
    e.preventDefault()
    console.log('✨ Ceci est mon event :', e)
    alert(e.target['my_input'].value)
}
export default App
