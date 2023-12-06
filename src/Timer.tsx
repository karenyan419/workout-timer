import { useEffect, useState } from "react"
import TimeDisplay from "./TimeDisplay"
import Start from "./Start"
import Reset from "./Reset";

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
        <Reset timeChanger={setTime}/>
    </>
}

export default Timer