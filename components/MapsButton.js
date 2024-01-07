import React from 'react'

function MapsButton({item}) {
  return (
    <a className='w-[7rem] sm:w-[9rem] min-h-[2.5rem] min-sm:h-[3rem] px-[0.25rem] py-[0.1rem] rounded-[0.6875rem]
    flex justify-evenly h-fit text-[0.8rem] md:text-[1rem] mr-2
    items-center gradient-hotspot cursor-pointer'
    href={`https://www.google.com/maps/dir//${item.location.latitude},${item.location.longitude}`}
    target={"_blank"} rel="noreferrer" >
        <img src='/images/Google_Maps_icon.png' className="w-[1.1rem]"></img>
        Open Maps
    </a>
  )
}

export default MapsButton