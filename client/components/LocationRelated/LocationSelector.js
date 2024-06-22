import {React,useContext,useState,useRef,useEffect} from "react";
import SelectionButton from "../SelectionButton";
import LocationDesc from "./LocationDesc";
import categoryItemsData from '../Categories/CategoryItemsData'

import NavigationContext from "../contexts/NavigationContext";
import LocationSelectorHeightContext from "../contexts/LocationSelectorHeightContext";
import NestedLocationContext from "../contexts/NestedLocationContext";
import ViewCountContext from "../contexts/ViewCountContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function LocationSelector() {
  
  const [currentItemID,setCurrentItemID,currentSuperParentId,setCurrentSuperParentId] = useContext(NavigationContext);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({})
  const [isLocationNested,setIsLocationNested] = useContext(NestedLocationContext);
  const [viewCount,setViewCount] = useContext(ViewCountContext);


  // the below useStates and corresponding useEffect are for conditional rendering
  const [isNestedListEmpty, setIsNestedListEmpty] = useState(false);
  const [shouldShowLocationName, setShouldShowLocationName] = useState(false);
  const [shouldShowSelectionButton, setShouldShowSelectionButton] = useState(false);

  useEffect(() => {
    setIsNestedListEmpty(location.nestedList && location.nestedList.length === 0);
    setShouldShowLocationName(location.superParent && categoryItemsData[location.superParent] && location.name !== categoryItemsData[location.superParent].name);
    setShouldShowSelectionButton(location.location !== null);
  }, [currentItemID,location,loading]);


  useEffect(() => {
      const Backend = process.env.NEXT_PUBLIC_BACKEND;
      const fetchData = async () => {
        setLoading(true);
        try{
          const response = await fetch(`${Backend}/location?id=${currentItemID}`);
          const data = await response.json();
          if(viewCount === 0 && data.id === 57240116) setViewCount(data.clickCount);
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
    if(isLocationNested){
      setIsLocationNested(false);
    }
    else setCurrentItemID(location.parent);
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
    rounded-[30px] bg-off-blue lg:w-2/3 h-fit px-4 md:px-8 gap-y-4 md:gap-y-8 py-4 md:py-8' 
    ref={LocationSelectorRef}
    >
      
      <div className=" text-background-blue text-2xl md:text-3xl flex items-center">

        {
          currentItemID !== location.superParent ?
            <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer absolute" onClick={handleBackClick}/> 
          : null
        }

        <div className="flex justify-center items-center w-full text-center">
          {loading ? "Loading..." : categoryItemsData[location.superParent].name}
        </div>

      </div>

        <>
          { !loading && isNestedListEmpty && <LocationDesc item={location} />}

          {isLocationNested && <LocationDesc item={location} />}

          {!isNestedListEmpty && !isLocationNested && (
            <div className="gap-y-4 md:gap-y-8 flex flex-col">

              {shouldShowLocationName && (
                <div className="flex justify-center text-xl md:text-2xl">
                  {location.name}
                </div>
              )}

              {shouldShowSelectionButton && (
                <div className="flex justify-center items-center">
                  <SelectionButton item={location} />
                </div>
              )}

              <div className="flex justify-evenly flex-wrap gap-y-6 md:gap-y-9">
                {!loading && location.nestedList.map(currItem => (
                  <SelectionButton item={currItem} key={currItem.nestedItemId} />
                ))}
              </div>

            </div>
          )}
        </>
    </div>
  )
}

export default LocationSelector;