import {React,useState,useEffect} from 'react'

import LocationSelectorHeightContext from '../contexts/LocationSelectorHeightContext';

import LocationSelector from "./LocationSelector";
import PopularLocation from "./PopularLocation";
import PopularLocationMobile from './PopularLocationMobile';


function LocationContainer() {
  
  const [locationSelectorHeight, setLocationSelectorHeight] = useState(0);

  const [isMobileDevice, SetIsMobileDevice] = useState(false);
  
  useEffect(() => {
      const handleResize = () => {
          const isMobileDevice = window.innerWidth >= 1024;
          SetIsMobileDevice(isMobileDevice);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <div className='flex lg:flex-row flex-col'>
      <LocationSelectorHeightContext.Provider value={[locationSelectorHeight,setLocationSelectorHeight]}>
        <LocationSelector></LocationSelector>
        {isMobileDevice ?
         <PopularLocation></PopularLocation> :
         <PopularLocationMobile></PopularLocationMobile>
        }
        
      </LocationSelectorHeightContext.Provider>
    </div>
  )
}

export default LocationContainer