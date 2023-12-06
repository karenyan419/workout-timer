import { useEffect, useState } from "react"

const StartStop = (props: {timerActive: boolean, setTimerActive: Function})  => {


    const clickHandler = () => {
        props.setTimerActive(!props.timerActive);
    }

    
    return <button
    onClick={clickHandler}>
        {props.timerActive ? 'Stop' : 'Start'}
        </button>
}

export default StartStop