import {React,useState} from 'react'

import LocationSelectorHeightContext from './contexts/LocationSelectorHeightContext';

import LocationSelector from "./LocationSelector";
import PopularLocation from "./PopularLocation";

function LocationContainer() {
    
const [locationSelectorHeight, setLocationSelectorHeight] = useState(0);

  return (
    <div className='flex'>
      <LocationSelectorHeightContext.Provider value={[locationSelectorHeight,setLocationSelectorHeight]}>
        <LocationSelector ></LocationSelector>
        <PopularLocation></PopularLocation>
      </LocationSelectorHeightContext.Provider>
    </div>
  )
}

export default LocationContainer