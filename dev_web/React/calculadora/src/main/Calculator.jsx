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
        if (state.current === 0) {
            setState(state => ({ ...state, operation, current: 1, clearDisplay: true }))
        } else {
            const equals = operation === "="
            const currentOperation = state.operation

            const values = [...state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                if (isNaN(values[0]) || !isFinite(values[0])) {
                    this.clearMemory()
                    return
                }
            } catch (e) {
                values[0] = state.values[0]
            }

            values[1] = 0

            setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    function addDigit(n) {
        if (n === "." && state.displayValue.includes(".")) return /* evitar dois pontos */
        const clearDisplay = state.displayValue === "0"
            || state.clearDisplay /* aqui permite n acumular os zeros e zerar o display */

        const currentValue = clearDisplay ? "" : state.displayValue // aqui acumula os numeros e reseta 

        const displayValue = currentValue + n /* novo valor do display */

        setState(state => (
            { ...state, displayValue, clearDisplay: false }
        ))

        // atualiza o values
        if (n !== ".") {

            const i = state.current
            const newValue = parseFloat(displayValue)
            const values = [...state.values]
            values[i] = newValue
            setState(state => ({ ...state, values }))
        }
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