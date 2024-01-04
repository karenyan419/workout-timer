import { useEffect, useState } from "react"
import TimeDisplay from "./TimeDisplay"
import StartStop from "./StartStop"
import Reset from "./Reset";

const Timer = ()  => {

    const [timerDuration, setTimerDuration] = useState<number>(10);
    const [time, setTime] = useState<number>(timerDuration);
    const [timerActive, setTimerActive] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(time => time - (timerActive ? 0.01 : 0));
        }, 10);

    
        return () => clearInterval(interval);
      }, [timerActive]);

    const clickHandler = () => {
        setTime(0);
    }
    console.log(time)
    if (timerActive == true && time < 0) {
      setTime(0);
      setTimerActive(false);
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