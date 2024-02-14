import {React} from 'react'
import NavigationItems from './NavigationItems'
import SelectionButton from './SelectionButton'
import ClickCount from './LocationRelated/ClickCountSmall';

function TopResults() {

  return (
    <div className={`my-3 max-h-[75%] flex flex-col justify-start rounded-[30px] lg:rounded-r-[0px]
      bg-off-blue/50 overflow-y-auto thinScrollbar`}>

        <div className=" text-background-blue text-2xl md:text-3xl mt-4 md:mt-8
        flex text-center mx-auto items-center">
          Top Results
        </div>

        <div className="flex justify-evenly flex-wrap mt-9 md:mt-12">
          {NavigationItems.slice(0,10).map(currItem => (
            <div className='flex justify-between items-center' key = {currItem.id}>
              <SelectionButton item = {currItem}></SelectionButton>
              <ClickCount item={currItem}></ClickCount>
            </div>
          ))}
        </div>
    </div>
  )
}

export default TopResults