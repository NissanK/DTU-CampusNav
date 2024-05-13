import React from 'react'

import ClickCountLarge from './ClickCountLarge'
import MapsButton from './MapsButton'

function LocationDesc({item}) {
  return (
    <div className='flex justify-between flex-col sm:flex-row-reverse my-8'>

      <div className='flex flex-col items-center sm:w-1/2'>
        <img src='./images/googleMapsPlaceholder.png' className='w-2/3 rounded-2xl'></img>
      </div>

      <div className='flex flex-col text-background-blue justify-start sm:w-1/2'>
        <div className='mb-4 text-2xl md:text-3xl text-center sm:text-left mt-4 sm:mt-0'>{item.name}</div>
        {item.description === null ? null :
          item.description.map((currItem,index) => (
          <div className='text-xl md:text-2xl text-center sm:text-left' key={index}>
            {currItem}
          </div>
        ))}
        <div className='flex justify-evenly sm:justify-between mt-8'>

          <ClickCountLarge item = {item}></ClickCountLarge>
          <MapsButton item = {item}></MapsButton>

        </div>
      </div>

    </div>
  )
}

export default LocationDesc