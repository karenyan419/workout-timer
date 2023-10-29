import { useEffect, useState } from "react"
import TimeDisplay from "./TimeDisplay"
import Start from "./Start"

const Timer = ()  => {

    const [time, setTime] = useState<number>(0);



    const clickHandler = () => {
        // setMyNumber(myNumber + 1);
    }
    
    return <>
        <TimeDisplay time={time}/>
        <Start/>
    </>
}

export default Timer