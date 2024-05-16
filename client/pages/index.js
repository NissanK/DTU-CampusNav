import {React,useState} from 'react'
import Footer from '../components/Footer'
import NewMainPageDiv from '../components/NewMainPageDiv'
import CategoryItemsRow from '../components/Categories/CategoryItemsRow'


import NavigationContext from '../components/contexts/NavigationContext'
import LocationContainer from '../components/LocationRelated/LocationContainer'
import NestedLocationContext from '../components/contexts/NestedLocationContext'

export default function Home() {

  const [currentItemID, setCurrentItemID] = useState(1);
  const [currentSuperParentId, setCurrentSuperParentId] = useState(1);
  const [isLocationNested, setIsLocationNested] = useState(false);

  return (
    <div >
      <NavigationContext.Provider value={[currentItemID,setCurrentItemID,currentSuperParentId,setCurrentSuperParentId]}>
      <NestedLocationContext.Provider value={[isLocationNested, setIsLocationNested]}>
        <NewMainPageDiv></NewMainPageDiv>
        <CategoryItemsRow></CategoryItemsRow>
        <LocationContainer></LocationContainer>
      </NestedLocationContext.Provider>
      </NavigationContext.Provider>
      <Footer></Footer>
    </div>
  )
}
