import React from 'react'

function MainPageContent() {
  return (
    <>

        <div className='text-xl text-center lg:text-left'>
            Discover diverse locations at DTU by using the search below or explore by category!
        </div>

        <div className='flex justify-around'>
            <div className='flex flex-col'>
                <div className='text-4xl text-bright-blue'>100<span className='text-background-blue'>+</span></div>
                <div className='text-xl'>Locations</div>
            </div>
            <div className='flex flex-col'>
                <div className='text-4xl text-bright-blue'>100<span className='text-background-blue'>+</span></div>
                <div className='text-xl'>Visitors</div>
            </div>
        </div>
    </>
  )
}

export default MainPageContent