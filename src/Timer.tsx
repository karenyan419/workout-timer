import { useEffect, useState } from "react"
import TimeDisplay from "./TimeDisplay"
import StartStop from "./StartStop"
import Reset from "./Reset";
import TimesUp from "./TimesUp";

const Timer = ()  => {

    const [timerDuration, setTimerDuration] = useState<number>(5);
    const [time, setTime] = useState<number>(timerDuration);
    const [timerActive, setTimerActive] = useState<boolean>(false);
    const [timesUp, setTimesUp] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(time => time - (timerActive ? 0.01 : 0));
        }, 10);

    
        return () => clearInterval(interval);
      }, [timerActive]);


    if (timerActive == true && time < 0) {
      setTime(0);
      setTimerActive(false);
      setTimesUp(true);
    }
    
    return <>
        <TimeDisplay time={time}/>
        <div>
          <StartStop timerActive={timerActive} setTimerActive={setTimerActive}/>
          <Reset setTime={setTime} timerDuration={timerDuration} setTimerActive={setTimerActive} setTimesUp={setTimesUp}/>
        </div>
        <div>
        <TimesUp status={timesUp}/>
        </div>
    </>
}

export default Timer