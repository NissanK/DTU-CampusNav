import {React,useState} from 'react'
import Footer from '../components/Footer'
import NewMainPageDiv from '../components/NewMainPageDiv'
import CategoryItemsRow from '../components/Categories/CategoryItemsRow'
import NavigationContext from '../components/contexts/NavigationContext'
import LocationContainer from '../components/LocationRelated/LocationContainer'
import NestedLocationContext from '../components/contexts/NestedLocationContext'
import ViewCountContext from '../components/contexts/ViewCountContext'

export default function Home() {

  const [currentItemID, setCurrentItemID] = useState(57240116);
  const [currentSuperParentId, setCurrentSuperParentId] = useState(57240116);
  const [isLocationNested, setIsLocationNested] = useState(false);
  const [viewCount,setViewCount] = useState(0);

  return (
    <div >
      <NavigationContext.Provider value={[currentItemID,setCurrentItemID,currentSuperParentId,setCurrentSuperParentId]}>
        <NestedLocationContext.Provider value={[isLocationNested, setIsLocationNested]}>
          <ViewCountContext.Provider value={[viewCount,setViewCount]}>
            <NewMainPageDiv></NewMainPageDiv>
            <CategoryItemsRow></CategoryItemsRow>
            <LocationContainer></LocationContainer>
          </ViewCountContext.Provider>
        </NestedLocationContext.Provider>
      </NavigationContext.Provider>

      <Footer></Footer>
    </div>
  )
}
