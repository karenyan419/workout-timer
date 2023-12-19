import { useEffect, useState } from "react"
import TimeDisplay from "./TimeDisplay"
import StartStop from "./StartStop"
import Reset from "./Reset";

const Timer = ()  => {

    const [time, setTime] = useState<number>(300);
    const [timerDuration, setTimerDuration] = useState<number>(300);
    const [timerActive, setTimerActive] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
          console.log(timerActive);
          setTime(time => time - (timerActive ? 0.01 : 0));
        }, 10);

    
        return () => clearInterval(interval);
      }, [timerActive]);

    const clickHandler = () => {
        setTime(0);
    }
    
    return <>
        <TimeDisplay time={time}/>
        <div>
          <StartStop timerActive={timerActive} setTimerActive={setTimerActive}/>
          <Reset setTime={setTime} timerDuration={timerDuration} setTimerActive={setTimerActive}/>
        </div>
    </>
}

export default Timer