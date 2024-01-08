import {React,useContext,useRef,useEffect} from 'react'
import SelectionButton from './SelectionButton';
import NavigationContext from './contexts/NavigationContext';
import LocationSelectorHeightContext from './contexts/LocationSelectorHeightContext';
import ClickCount from './ClickCountSmall.js';

function PopularLocation() {

    const [currentItemID, setCurrentItemID, navigationItems] = useContext(NavigationContext);
    const [locationSelectorHeight,setLocationSelectorHeight] = useContext(LocationSelectorHeightContext);

    const popularLocationsRef = useRef(null);

    useEffect(() => {
      popularLocationsRef.current.style.height = `${locationSelectorHeight}px`;
    
    }, [locationSelectorHeight])
    

    // Create a shallow copy of the array
    let sortedNavigationItems = navigationItems.slice();

    // Sorting the copied array based on clickCount in ascending order
    sortedNavigationItems.sort((a, b) => b.clickCount - a.clickCount);

    return (
        <div className={`mx-[1rem] md:mx-[2rem] my-3 flex flex-col justify-start
            rounded-bl-[30px] rounded-tl-[30px] bg-off-blue overflow-y-auto  w-1/3`}
             ref = {popularLocationsRef}>
            <div className="flex justify-between mx-4 md:mx-8 flex-col h-min">

                <div className=" text-background-blue text-2xl md:text-3xl mt-4 md:mt-8 flex items-center">
                    <div className="flex justify-center items-center w-full text-center">
                        Popular Locations
                    </div>
                </div>

                <div className="flex justify-evenly flex-wrap mt-9 md:mt-12 h-min">
                    {sortedNavigationItems.slice(0,8).map(currItem => (
                        <div className='flex justify-between items-center' key = {currItem.id}>
                            <SelectionButton item = {currItem} ></SelectionButton>
                            <ClickCount item={currItem}></ClickCount>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularLocation