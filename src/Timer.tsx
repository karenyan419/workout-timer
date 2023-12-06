import { useEffect, useState } from "react"
import TimeDisplay from "./TimeDisplay"
import Start from "./Start"

const Timer = ()  => {

    const [time, setTime] = useState<number>(300);

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(time => time - 1);
        }, 1000);

    
        return () => clearInterval(interval);
      }, []);

    const clickHandler = () => {
        setTime(0);
    }
    
    return <>
        <TimeDisplay time={time}/>
        <Start/>
        {/* <Reset/> */}
    </>
}

export default Timer