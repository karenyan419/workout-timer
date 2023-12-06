import { useEffect, useState } from "react"
import TimeDisplay from "./TimeDisplay"
import StartStop from "./StartStop"
import Reset from "./Reset";

const Timer = ()  => {

    const [time, setTime] = useState<number>(300);
    const [timerActive, setTimerActive] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
          console.log(timerActive);
          setTime(time => time - (timerActive ? 1 : 0));
        }, 1000);

    
        return () => clearInterval(interval);
      }, [timerActive]);

    const clickHandler = () => {
        setTime(0);
    }
    
    return <>
        <TimeDisplay time={time}/>
        <StartStop timerActive={timerActive} setTimerActive={setTimerActive}/>
        <Reset setTime={setTime}/>
    </>
}

export default Timer