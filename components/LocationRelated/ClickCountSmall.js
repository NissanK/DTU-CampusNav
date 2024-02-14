import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function ClickCountSmall({item}) {
  return (
    <div className=' flex flex-col items-center justify-center w-[2rem] sm:w-[2.5rem] min-h-[2.5rem] min-sm:h-[3rem]
     px-[0.25rem] py-[0.1rem] mb-6 md:mb-9 text-[0.7rem] md:text-[0.8rem] mr-2
    rounded-[0.6875rem] gradient-hotspot text-center'>
      <FontAwesomeIcon icon={faEye}/>
      {item.clickCount}
    </div>
  )
}

export default ClickCountSmall