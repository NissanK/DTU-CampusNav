import React from 'react'

function HotspotButton(props) {
  return (
    <div className='w-[12rem] h-[3.5rem] rounded-[0.6875rem] flex justify-center
     items-center gradient-hotspot mb-12 text-[1rem] mr-2 cursor-pointer'>
        {props.name}
    </div>
  )
}

export default HotspotButton