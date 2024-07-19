import React from 'react'
import "./CandT.css"
import Acne from '../../Components/Acne/Acne'
import Pigmentation from '../../Components/Pigmentation/Pigmentation'

const CandT = () => {
    return (
        <>
        <div className='concerns-treatment'>
            <h1>Concerns & Treatment</h1>
        </div>
        <div id='Acnee'> <Acne/></div>
       <div id="pigmentationn"><Pigmentation/></div>
        
        </>
    )
}

export default CandT
