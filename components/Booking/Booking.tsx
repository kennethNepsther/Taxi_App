import React from 'react'
import AutocompleteAdress from './AutocompleteAdress'

function Booking() {
   
    //const screenHeight = window.innerHeight; 
    const screenHeight = 1000 *0.72 

  return (
    <div className='p-5'>
        <h2 className='text-[20px] font-semibold'>Booking</h2>

        <div className='border-[1px] p-5 rounded-md' style={{height:screenHeight}}>
            <AutocompleteAdress />
        </div>
        
    </div>
  )
}

export default Booking