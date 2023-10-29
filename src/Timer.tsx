import { useEffect, useState } from "react"
import TimeDisplay from "./TimeDisplay"
import Start from "./Start"

const Timer = ()  => {

    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(time => time + 1);
        }, 1000);

    
        return () => clearInterval(interval);
      }, []);

    const clickHandler = () => {
        // setMyNumber(myNumber + 1);
    }
    
    return <>
        <TimeDisplay time={time}/>
        <Start/>
    </>
}

export default Timer