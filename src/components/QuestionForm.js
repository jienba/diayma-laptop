import {useState} from "react";

const QuestionForm = () => {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    const checkValue = value => !value.includes('f') && setInputValue(value)

    return (
        <div>
            <textarea
                value={inputValue}
                onChange={event => checkValue(event.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
};


export default QuestionForm
