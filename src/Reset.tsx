import { useEffect, useState } from "react"

const Reset = (props: {setTime: Function})  => {


    const clickHandler = () => {
        props.setTime(0);
    }
    
    return <button
    onClick={clickHandler}>
        Reset
        </button>
}

export default Reset