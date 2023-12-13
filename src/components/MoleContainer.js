import React, {useState} from 'react'; //from instructions
import Mole from './Mole'; //importing mole to use it
import EmptySlot from './EmptySlot'; //importing empty slot to use it

function MoleContainer(setScore, score){ //from instructions
    const [displayMole, setDisplayMole] = useState(false) //from instructions

    const handleBop = () => { //from instructions
        setScore(prevScore => prevScore + 1); //from instructions
        setDisplayMole(false); //from instructions
    }

    const displayMoleComponent = displayMole ? <Mole handleBop={handleBop} /> : <EmptySlot setDisplayMole={setDisplayMole} />; //from instructions

    let formattedDisplay = displayMoleComponent.map;
    return (
        <div className='MoleContainer'>
            {/* <h2>MoleContainer</h2> */}
            {displayMoleComponent}
        </div>
    )
}

export default MoleContainer