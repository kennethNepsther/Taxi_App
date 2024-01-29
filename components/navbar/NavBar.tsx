import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div>
        <Image src='/logo_taxi-1.png' alt="logotipo" width={120} height={50}/>

        <div className='flex'>
            <h2>Home</h2>
            <h2>History</h2>
            <h2>Help</h2>
        </div>
    </div>
  )
}

export default NavBar