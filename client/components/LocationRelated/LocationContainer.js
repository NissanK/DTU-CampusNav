import {React,useState,useEffect} from 'react'

import LocationSelectorHeightContext from '../contexts/LocationSelectorHeightContext';

import LocationSelector from "./LocationSelector";
import PopularLocation from "./PopularLocation";
import PopularLocationMobile from './PopularLocationMobile';
import PopularLocationContext from '../contexts/PopularLocationContext';

function LocationContainer() {
  
  const [locationSelectorHeight, setLocationSelectorHeight] = useState(0);

  const [isMobileDevice, SetIsMobileDevice] = useState(false);
  const [popularLocations, setPopularLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const Backend = process.env.NEXT_PUBLIC_BACKEND;

    const fetchData = async () => {
        try{
            setLoading(true);
            const response = await fetch(`${Backend}/topResults/all`);
            const data = await response.json();
            setPopularLocations(data);
            setTimeout(() => {
              setLoading(false);
            }, 400)
        }
        catch(error){
            setPopularLocations([]);
        }
    }

    const handleResize = () => {
      const isMobileDevice = window.innerWidth >= 1024;
      SetIsMobileDevice(isMobileDevice);
    };
    
    fetchData();
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex lg:flex-row flex-col'>
      <LocationSelectorHeightContext.Provider value={[locationSelectorHeight,setLocationSelectorHeight]}>
        <LocationSelector/>
        <PopularLocationContext.Provider value={[popularLocations,loading]}>
          {isMobileDevice ?
          <PopularLocation/> :
          <PopularLocationMobile/>
          }
        </PopularLocationContext.Provider>
      </LocationSelectorHeightContext.Provider>
    </div>
  )
}

export default LocationContainer