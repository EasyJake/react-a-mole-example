import { useEffect } from "react"
import moleImg from "../images/molehill.png"


function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000) //from instructions
        let timer = setTimeout(() => { //from instructions
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (//from instructions
        <div className="emptySlot">
            <img style = {{'width': '30%'}} 
            src={moleImg} 
            alt="mole" 
            onClick={props.handleClick}/>
        </div>
    )
}

export default EmptySlot