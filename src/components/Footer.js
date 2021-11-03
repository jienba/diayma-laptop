import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')
    const errMsg = " Attention, il n'y a pas d'@, ceci n'est pas une adresse valide."
    const validateMail = mail => !mail.includes('@') &&  alert(errMsg)

    const handleInput = e => setInputValue(e.target.value)

    return (
        <footer className='dlp-footer'>
            <div className='dlp-footer-elem'>
                Pour les passionné·e·s des TIC 💻
            </div>
            <div className='dlp-footer-elem'>Laissez-nous votre mail : </div>
            <input type="text"
                   placeholder="Entrez votre email"
                   onChange={handleInput}
                   // value={inputValue}
                   onBlur={() => validateMail(inputValue)}
            />
        </footer>
    )
}

export default Footer
