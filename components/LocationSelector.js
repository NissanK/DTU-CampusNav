import {React,useContext,useState,useRef,useEffect} from "react";
import SelectionButton from "./SelectionButton";
import LocationDesc from "./LocationDesc";

import NavigationContext from "./contexts/NavigationContext";
import LocationSelectorHeightContext from "./contexts/LocationSelectorHeightContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function MainPageDiv() {
  
  const [currentItemID, setCurrentItemID, navigationItems] = useContext(NavigationContext);

  const handleBackClick = () => {
    setCurrentItemID(navigationItems[currentItemID-1].parent);
  }

  const [locationSelectorHeight, setLocationSelectorHeight] = useContext(LocationSelectorHeightContext);

  const LocationSelectorRef = useRef(null);

  useEffect(() => {
    setLocationSelectorHeight(LocationSelectorRef.current.clientHeight);
  }, [currentItemID])

  return (
    <div className='flex ml-[1rem] md:ml-[2rem] my-3 justify-start flex-col
      rounded-[30px] bg-off-blue h-fit w-2/3' 
      ref={LocationSelectorRef}
      >
      <div className="flex justify-between mx-4 md:mx-8 flex-col">

        <div className=" text-background-blue text-2xl md:text-3xl mt-4 md:mt-8 flex items-center">
          {currentItemID !== navigationItems[currentItemID-1].superParent ? 
            <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer absolute" onClick={handleBackClick}/> 
            : null
          }
          <div className="flex justify-center items-center w-full text-center">
            {navigationItems[navigationItems[currentItemID-1].superParent-1].name}
          </div>
        </div>

        {navigationItems[currentItemID-1].location === null ?
          <div className="flex justify-evenly flex-wrap mt-9 md:mt-12">
            {
              navigationItems[currentItemID-1].nestedList.map(currItem => (
                <SelectionButton item = {currItem} key = {currItem.id}></SelectionButton>
              ))
            }
          </div>
          :
          <LocationDesc item = {navigationItems[currentItemID-1]}></LocationDesc>
        }

      </div>
    </div>
  )
}

export default MainPageDiv;