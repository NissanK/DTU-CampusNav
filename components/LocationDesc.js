import Image from 'next/image'
import React from 'react'

function LocationDesc({item}) {
  return (
    <div className='flex items-center flex-col'>
        <div className='flex mt-8 flex-col'>
          {item.description.map(currItem => (
            <div className='flex items-center text-center
            justify-center text-background-blue text-xl md:text-2xl'>
              {currItem}
            </div>
          ))}
        </div>

        <a className='w-[9rem] h-[3rem] rounded-[0.6875rem] flex justify-evenly
        items-center gradient-google-maps mb-12 text-[1rem] mr-2 cursor-pointer mt-8'
        href={`https://www.google.com/maps/dir//${item.location.latitude},${item.location.longitude}`}
        target={"_blank"} rel="noreferrer" >
          <img src='/images/Google_Maps_icon.png' className="w-[1.3rem]"></img>
          Open Maps
        </a>
    </div>
  )
}

export default LocationDesc