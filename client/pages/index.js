import {React,useState,useEffect} from 'react'
import Footer from '../components/Footer'
import NewMainPageDiv from '../components/NewMainPageDiv'
import CategoryItemsRow from '../components/Categories/CategoryItemsRow'


import NavigationContext from '../components/contexts/NavigationContext'
import LocationContainer from '../components/LocationRelated/LocationContainer'
import NestedLocationContext from '../components/contexts/NestedLocationContext'
import { getAuth, signInWithCustomToken } from 'firebase/auth';

const Backend = process.env.NEXT_PUBLIC_BACKEND;

export default function Home() {

  useEffect(() => {
    const fetchTokenAndSignIn = async () => {
      try {
        const response = await fetch(`${Backend}/generate-token`);
        console.log(response);
        const token = response.data.token;
        const auth = getAuth();
        const userCredential = await signInWithCustomToken(auth, token);
        setUser(userCredential.user);
      } catch (error) {
        console.error('Error signing in: ', error);
      }
    };

    fetchTokenAndSignIn();
  }, []);

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
