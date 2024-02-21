import { useEffect, useState } from "react"

const TimesUp = (props: {status: boolean})  => {

    if (props.status === true) {
        return <>
    Time's up!
    </>
    } else {
        return null
    }
}

export default TimesUp;