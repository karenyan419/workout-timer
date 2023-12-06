import { useEffect, useState } from "react"

const Reset = (props: {timeChanger: Function})  => {


    const clickHandler = () => {
        props.timeChanger(0);
    }
    
    return <button
    onClick={clickHandler}>
        Reset
        </button>
}

export default Reset