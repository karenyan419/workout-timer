import { useEffect, useState } from "react"

const TimeDisplay = (props: {time: number})  => {
    
    return <div>
        {props.time}
    </div>
};

export default TimeDisplay;