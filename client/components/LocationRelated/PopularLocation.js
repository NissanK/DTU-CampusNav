import {React,useContext,useRef,useEffect} from 'react'
import SelectionButton from '../SelectionButton';
import NavigationContext from '../contexts/NavigationContext';
import LocationSelectorHeightContext from '../contexts/LocationSelectorHeightContext';
import ClickCount from './ClickCountSmall.js';

function PopularLocation() {

    const [currentItemID, setCurrentItemID, navigationItems] = useContext(NavigationContext);
    const [locationSelectorHeight,setLocationSelectorHeight] = useContext(LocationSelectorHeightContext);

    const popularLocationsRef = useRef(null);

    useEffect(() => {
      popularLocationsRef.current.style.height = `${locationSelectorHeight}px`;
    }, [locationSelectorHeight])

    let sortedNavigationItems = navigationItems.slice();

    sortedNavigationItems.sort((a, b) => b.clickCount - a.clickCount);


    return (
        <div className={`my-3 flex flex-col justify-start rounded-l-[30px] bg-off-blue
        mx-8 overflow-y-auto w-1/3 thinScrollbarColor`}
            ref = {popularLocationsRef}>
            <div className=" text-background-blue text-2xl md:text-3xl mt-4 md:mt-8
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

export default PopularLocation