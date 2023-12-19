import { useEffect, useState } from "react"

const TimeDisplay = (props: {time: number})  => {


    const processNumbers = (input: number) => {
        const hours: number = Math.floor(input/3600)
        const minutes: number = Math.floor((input-hours*3600)/60)
        const seconds: number = input-hours*3600-minutes*60
        const addZeroForTwoDigits = (input: number) => {
            if (input.toString().length < 2) {
                return "0" + input
            }
            return input
        }
        return `${addZeroForTwoDigits(hours)}:${addZeroForTwoDigits(minutes)}:${addZeroForTwoDigits(Math.floor(seconds))}`

    }

    

    
    return <div>
        {processNumbers(props.time)}
    </div>
};

export default TimeDisplay;