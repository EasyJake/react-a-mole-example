import {useEffect} from 'react'
import moleImg from '../images/mole.png'

function Mole(props){
    useEffect(() => {
        // THIS IS THE VALUE THAT ADJUSTS MOLE DURATION
       
        let randSeconds = Math.ceil(Math.random() * 500
        )
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img 
            src={moleImg}
            onClick={props.handleBop} />
        </div>
    )
}


export default Mole