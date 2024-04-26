import {React,useContext,useState,useRef,useEffect} from "react";
import SelectionButton from "../SelectionButton";
import LocationDesc from "./LocationDesc";
import categoryItemsData from '../Categories/CategoryItemsData'

import NavigationContext from "../contexts/NavigationContext";
import LocationSelectorHeightContext from "../contexts/LocationSelectorHeightContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function MainPageDiv() {
  
  const [currentItemID,setCurrentItemID,currentSuperParentId,setCurrentSuperParentId] = useContext(NavigationContext);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({})
    
  useEffect(() => {
      const Backend = process.env.NEXT_PUBLIC_BACKEND;
      const fetchData = async () => {
        setLoading(true);
        try{
          const response = await fetch(`${Backend}/location?id=${currentItemID}`);
          const data = await response.json();
          setLocation(data);
        }
        catch(error){
          setLocation({});
        }
        setLoading(false);
      }
      fetchData();
  }, [currentItemID])

  const handleBackClick = () => {
    setCurrentItemID(location.parent);
  }

  const LocationSelectorRef = useRef(null);
  const [locationSelectorHeight, setLocationSelectorHeight] = useContext(LocationSelectorHeightContext);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setLocationSelectorHeight(entry.target.clientHeight);
      }
    });

    if (LocationSelectorRef.current) {
      resizeObserver.observe(LocationSelectorRef.current);
    }

    return () => {
      if (LocationSelectorRef.current) {
        resizeObserver.unobserve(LocationSelectorRef.current);
      }
    };
}, [currentItemID]);

  return (
    <div id="locationSelector" className='flex ml-2 mr-2 lg:ml-8 lg:mr-0 my-3 flex-col
      rounded-[30px] bg-off-blue lg:w-2/3 h-fit px-4 md:px-8' 
      ref={LocationSelectorRef}
      >

      <div className=" text-background-blue text-2xl md:text-3xl mt-4 md:mt-8 flex items-center">
        {currentItemID !== location.superParent ?
          <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer absolute" onClick={handleBackClick}/> 
          : null
        }
        <div className="flex justify-center items-center w-full text-center">
          {loading ? "Loading..." : categoryItemsData[location.superParent-1].name}
        </div>
      </div>

      {location.location === null ?
        <div className="flex justify-evenly flex-wrap mt-9 md:mt-12">
          {
            loading ? null :
            location.nestedList.map(currItem => (
              <SelectionButton item = {currItem} key = {currItem.nestedItemId}></SelectionButton>
            ))
          }
        </div>
        :
        loading ? null : 
        <LocationDesc item = {location}></LocationDesc>
      }

    </div>
  )
}

export default MainPageDiv;