import {React,useState,useEffect} from 'react'
import SearchBar from './SearchBar'
import MainPageContent from './MainPageContent'
import SearchContext from './contexts/SearchContext';
import SearchButtonContext from './contexts/SearchButtonContext';
import TopResults from './TopResults';

function NewMainPageDiv() {

  const [searchInput, setSearchInput] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [buttonClickedOnce, setButtonClickedOnce] = useState(false);

  useEffect(() => {
    if(buttonClicked) setButtonClickedOnce(true);
  }, [buttonClicked])

  useEffect(() => {
    if(searchInput === ""){
      setButtonClickedOnce(false);
    }
  }, [searchInput])

  return (

    <div className=' relative inline-block'>
        <img src="/images/dtu5.jpg" alt="DTU" className="block w-full h-screen object-[70%] object-cover"></img>
        <div className="absolute top-0 left-0 w-full h-full bg-lightest-blue bg-opacity-[85%] ">
            <div className='py-20 lg:py-10 flex  mx-2 lg:mx-16 h-screen justify-between'>

                <div className='flex flex-col justify-between w-full lg:w-1/2'>
                  <div className='text-4xl text-center lg:text-left mb-2'>
                      Navigating in DTU Made Easy: Your Ultimate Campus Guide
                  </div>
                  <SearchContext.Provider value={[searchInput,setSearchInput]}>
                    <SearchButtonContext.Provider value={[buttonClicked,setButtonClicked]}>
                      <SearchBar/>
                      {(searchInput === "" || buttonClickedOnce === false) ? <MainPageContent/> : <TopResults/>} 
                    </SearchButtonContext.Provider>
                  </SearchContext.Provider>
                </div>

                <img src='/images/navigationMapFront.png' className='hidden lg:block lg:h-[60%] xl:h-[70%]  self-center'></img>
            </div>
        </div>
    </div>
  )
}

export default NewMainPageDiv