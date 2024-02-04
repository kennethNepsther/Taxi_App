import React from 'react'

function AutocompleteAdress() {
  return (
    <div>
        <div className='mt-5'>
            <label className='text-gray-400'>Diz-nos onde estás</label>
            <input type="text"
            className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300'
            placeholder="Sua localização..." />
        </div>
        
        <div className='mt-3'>
            <label className='text-gray-400'>Onde vais</label>
            <input type="text"
            className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300'
            placeholder="Digite seu endereço..." />
        </div>

    </div>
  )
}

export default AutocompleteAdress