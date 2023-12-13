import { useEffect } from "react"
import moleImg from "../mole.png"


function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000) //from instructions
        let timer = setTimeout(() => { //from instructions
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (//from instructions
        <div>
            <img style = {{'width': '30vw'}} 
            src={moleImg} 
            alt="mole" 
            onClick={props.handleClick}/>
        </div>
    )
}

export default EmptySlot