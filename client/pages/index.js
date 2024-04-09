import {React,useState} from 'react'
import Footer from '../components/Footer'
import NewMainPageDiv from '../components/NewMainPageDiv'
import CategoryItemsRow from '../components/Categories/CategoryItemsRow'

import NavigationItems from '../components/NavigationItems'

import NavigationContext from '../components/contexts/NavigationContext'
import LocationContainer from '../components/LocationRelated/LocationContainer'

export default function Home() {

  const [currentItemID, setCurrentItemID] = useState(1);

  return (
    <div >
      <NavigationContext.Provider value={[currentItemID,setCurrentItemID,NavigationItems]}>
        <NewMainPageDiv></NewMainPageDiv>
        <CategoryItemsRow></CategoryItemsRow>
        <LocationContainer></LocationContainer>
      </NavigationContext.Provider>
      <Footer></Footer>
    </div>
  )
}
