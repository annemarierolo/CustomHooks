import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);
    const increment = (value = 1) => {
        // setCounter(counter + value);
        //Se hace asi para que en el momento de hacer la prueba tome el valor actual
        setCounter((current) => current + value);
    }
    const decrement = (value = 1) => {
        // setCounter(counter - value);
        setCounter((current) => current - value);

    }
    const reset = () => {
        setCounter(initialValue);
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
}