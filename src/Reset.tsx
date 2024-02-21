import { useEffect, useState } from "react"

const Reset = (props: {setTime: Function, timerDuration: number, setTimerActive: Function, setTimesUp: Function})  => {


    const clickHandler = () => {
        props.setTime(props.timerDuration);
        props.setTimerActive(false);
        props.setTimesUp(false);
    }
    
    return <button
    onClick={clickHandler}>
        Reset
        </button>
}

export default Reset