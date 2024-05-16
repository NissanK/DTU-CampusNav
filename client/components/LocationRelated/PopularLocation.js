import {React,useContext,useRef,useEffect,useState} from 'react'
import SelectionButton from '../SelectionButton';
import LocationSelectorHeightContext from '../contexts/LocationSelectorHeightContext';
import ClickCount from './ClickCountSmall.js';

function PopularLocation() {

    const [locationSelectorHeight,setLocationSelectorHeight] = useContext(LocationSelectorHeightContext);

    const popularLocationsRef = useRef(null);

    useEffect(() => {
      popularLocationsRef.current.style.height = `${locationSelectorHeight}px`;
    }, [locationSelectorHeight])

    const [popularLocations, setPopularLocations] = useState([])
    
    useEffect(() => {
        const Backend = process.env.NEXT_PUBLIC_BACKEND;
        const fetchData = async () => {
            try{
              const response = await fetch(`${Backend}/topResults/all`);
              const data = await response.json();
              setPopularLocations(data);
            }
            catch(error){
                setPopularLocations([]);
            }
        }
        fetchData();
    }, [])

    return (
        <div className={`my-3 flex flex-col justify-start rounded-l-[30px] bg-off-blue
        mx-8 overflow-y-auto w-1/3 thinScrollbarColor gap-y-4 md:gap-y-8 py-4 md:py-8`}
            ref = {popularLocationsRef}>

            <div className=" text-background-blue text-2xl md:text-3xl 
            flex text-center mx-auto items-center">
                Popular Locations
            </div>

            <div className="flex justify-evenly flex-wrap gap-y-6 md:gap-y-9">
                {popularLocations.map(currItem => (
                    <div className='flex justify-between items-center' key = {currItem.id}>
                        <SelectionButton item = {currItem}></SelectionButton>
                        <ClickCount item={currItem}></ClickCount>
                    </div>
                ))}

                {popularLocations.length === 0 ?
                    <div className='text-center text-xl text-background-blue'>Loading...</div> 
                    : null
                }

            </div>
            
        </div>
    )
}

export default PopularLocation