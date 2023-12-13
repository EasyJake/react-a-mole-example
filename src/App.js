import { useState } from 'react'
import MoleContainer from './components/MoleContainer.js'

function App(){ //from instructions
    let [score, setScore] = useState(0) //from instructions

    const createMoleHill = () => { //from instructions
        let hills = [] //from instructions
        for (let i = 0; i < 9; i++) { //from instructions
            hills.push( //from instructions
                <MoleContainer //from instructions
                // key= {i} //from instructions
                setScore={setScore} //from instructions
                score={score} /> //from instructions
            )
        }
    
        return ( //from instructions
            <div> 
                {hills}
            </div>
        )
    }

    return ( //from instructions
        <div className="App">
            <h1>React-a-Mole!</h1>
            {score}
            {createMoleHill()}
        </div>
    )
}

export default App

