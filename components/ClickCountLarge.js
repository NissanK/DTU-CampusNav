import React from 'react'

function ClickCountLarge({item}) {
  return (
    <div className=' flex flex-col items-center justify-center w-[7rem] sm:w-[9rem] min-h-[2.5rem] min-sm:h-[3rem]
     px-[0.25rem] py-[0.1rem] h-fit text-[0.8rem] md:text-[1rem] mr-2
    rounded-[0.6875rem] gradient-hotspot text-center'>
      {item.clickCount} views
    </div>
  )
}

export default ClickCountLarge