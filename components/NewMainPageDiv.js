import React from 'react'
import NewNavbar from './SearchBar'

function NewMainPageDiv() {

  return (

    <div className=' relative inline-block'>
        <img src="/images/dtu5.jpg" alt="DTU" class="block w-full h-auto"></img>
        <div class="absolute top-0 left-0 w-full h-full bg-lightest-blue bg-opacity-[85%] ">
            <div className='my-[5rem] flex mx-[4rem] h-[70%] justify-between'>
                <div className='flex flex-col justify-between w-1/2'>

                    <div className='text-4xl'>
                        Navigating in DTU Made Easy: Your Ultimate Campus Guide
                    </div>
                    <div className='text-xl'>
                        Discover diverse locations at DTU by using the search below or explore by category!
                    </div>

                    <NewNavbar></NewNavbar>

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

                </div>
                <img src='/images/navigationMapFront.png' className=''></img>
            </div>
        </div>
    </div>
  )
}

export default NewMainPageDiv