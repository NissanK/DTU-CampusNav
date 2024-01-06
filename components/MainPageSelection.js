import {React,useContext,useState} from "react";
import SelectionButton from "./SelectionButton";
import NavigationContext from "./contexts/NavigationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LocationDesc from "./LocationDesc";

function MainPageDiv() {
  
  const [currentItemID, setCurrentItemID, navigationItems] = useContext(NavigationContext);

  const handleBackClick = () => {
    setCurrentItemID(navigationItems[currentItemID-1].parent);
  }

  return (
    <div className='flex mx-[1rem] md:mx-[2rem] my-3 justify-start flex-col
      rounded-[30px] bg-off-blue opacity-80'>
      <div className="flex justify-between mx-4 md:mx-8 flex-col">

        <div className=" text-background-blue text-2xl md:text-3xl mt-4 md:mt-8 flex items-center">
          {currentItemID !== 1 ? 
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