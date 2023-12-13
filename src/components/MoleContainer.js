import React, {useState} from 'react'; //from instructions
import Mole from './Mole'; //importing mole to use it
import EmptySlot from './EmptySlot'; //importing empty slot to use it

function MoleContainer(setScore, score){ //from instructions
    const [displayMole, setDisplayMole] = useState(false) //from instructions

    const handleBop = () => { //from instructions
        setScore(prevScore => prevScore + 1); //from instructions
        setDisplayMole(false); //from instructions
    }

    const displayMoleComponent = displayMole //from instructions
        ? <Mole handleBop={handleBop} /> //from instructions
        : <EmptySlot />; //from instructions

    return (
        <div>
            {/* <h2>MoleContainer</h2> */}
            {displayMoleComponent}
        </div>
    )
}

export default MoleContainer