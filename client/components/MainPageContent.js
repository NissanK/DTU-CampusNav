import React ,{useContext} from 'react'
import ViewCountContext from './contexts/ViewCountContext'

function MainPageContent() {

    const [viewCount,setViewCount] = useContext(ViewCountContext);

  return (
    <>

        <div className='text-xl text-center lg:text-left'>
            Discover diverse locations at DTU by using the search below or explore by category!
        </div>

        <div className='flex justify-around'>
            <div className='flex flex-col self-end'>
                <div className='text-4xl text-bright-blue'>700<span className='text-background-blue'>+</span></div>
                <div className='text-xl'>Locations</div>
            </div>
            <img src='/images/navigationMapFront.png' className='lg:hidden w-2/5 mb-[40px] self-start'></img>
            <div className='flex flex-col self-end'>
                <div className='text-4xl text-bright-blue'>{Math.round(viewCount/100) * 100}<span className='text-background-blue'>+</span></div>
                <div className='text-xl'>Visitors</div>
            </div>
        </div>
    </>
  )
}

export default MainPageContent