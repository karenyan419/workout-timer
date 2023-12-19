import { useEffect, useState } from "react"

const Reset = (props: {setTime: Function, timerDuration: number, setTimerActive: Function})  => {


    const clickHandler = () => {
        props.setTime(props.timerDuration);
        props.setTimerActive(false);
    }
    
    return <button
    onClick={clickHandler}>
        Reset
        </button>
}

export default Reset