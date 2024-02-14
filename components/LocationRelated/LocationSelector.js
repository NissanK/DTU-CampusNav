import {React,useContext,useState,useRef,useEffect} from "react";
import SelectionButton from "../SelectionButton";
import LocationDesc from "./LocationDesc";

import NavigationContext from "../contexts/NavigationContext";
import LocationSelectorHeightContext from "../contexts/LocationSelectorHeightContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function MainPageDiv() {
  
  const [currentItemID, setCurrentItemID, navigationItems] = useContext(NavigationContext);

  const handleBackClick = () => {
    setCurrentItemID(navigationItems[currentItemID-1].parent);
  }

  const LocationSelectorRef = useRef(null);
  const [locationSelectorHeight, setLocationSelectorHeight] = useContext(LocationSelectorHeightContext);

  useEffect(() => {
    const simulateImageLoad = () => {
      setLocationSelectorHeight(LocationSelectorRef.current.clientHeight);
    };

    const timeoutId = setTimeout(simulateImageLoad, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (LocationSelectorRef.current) {
      setLocationSelectorHeight(LocationSelectorRef.current.clientHeight);
    }
  }, [LocationSelectorRef.current ? LocationSelectorRef.current.clientHeight : null,currentItemID]);

  return (
    <div id="locationSelector" className='flex ml-2 mr-2 lg:ml-8 lg:mr-0 my-3 flex-col
      rounded-[30px] bg-off-blue lg:w-2/3 h-fit px-4 md:px-8' 
      ref={LocationSelectorRef}
      >

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
  )
}

export default MainPageDiv;