import {React,useContext} from 'react'
import SelectionButton from '../SelectionButton';
import NavigationContext from '../contexts/NavigationContext';
import ClickCount from './ClickCountSmall.js';

function PopularLocationMobile() {

    const [currentItemID, setCurrentItemID, navigationItems] = useContext(NavigationContext);

    let sortedNavigationItems = navigationItems.slice();

    sortedNavigationItems.sort((a, b) => b.clickCount - a.clickCount);

    return (
        <div className={`mx-4 my-3 flex flex-col justify-start rounded-[30px] bg-off-blue`}>
            <div className=" text-background-blue text-2xl mt-4
            flex text-center mx-auto items-center">
                Popular Locations
            </div>

            <div className="flex justify-evenly flex-wrap mt-9 md:mt-12">
                {sortedNavigationItems.slice(0,10).map(currItem => (
                    <div className='flex justify-between items-center' key = {currItem.id}>
                        <SelectionButton item = {currItem}></SelectionButton>
                        <ClickCount item={currItem}></ClickCount>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularLocationMobile