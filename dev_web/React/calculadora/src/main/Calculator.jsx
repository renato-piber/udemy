import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'
import { useState } from 'react'

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0], /* vai ser um reduce, valor antigo e valor novo */
    current: 0 /* indice atual dos valores */
}

const Calculator = () => {

    const [state, setState] = useState(initialState)

    function clearMemory() {
       setState(initialState) 
    }

    function setOperation(operation) {
        console.log(operation)
    }

    function addDigit(n) {
        console.log(n)
    }

    return (
        <div className='calculator'> {/* class (html) === className (jsx) */}
            <Display value={state.displayValue} />
            <Button label="AC" click={clearMemory} triple />
            <Button label="/" click={setOperation} operation />
            <Button label="7" click={addDigit} />
            <Button label="8" click={addDigit} />
            <Button label="9" click={addDigit} />
            <Button label="*" click={setOperation} operation />
            <Button label="4" click={addDigit} />
            <Button label="5" click={addDigit} />
            <Button label="6" click={addDigit} />
            <Button label="-" click={setOperation} operation />
            <Button label="1" click={addDigit} />
            <Button label="2" click={addDigit} />
            <Button label="3" click={addDigit} />
            <Button label="+" click={setOperation} operation />
            <Button label="0" click={addDigit} double />
            <Button label="." click={addDigit} />
            <Button label="=" click={setOperation} operation />
        </div>
    )
}
export default Calculator