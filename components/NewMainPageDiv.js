import {React,useState} from 'react'
import SearchBar from './SearchBar'
import MainPageContent from './MainPageContent'
import SearchContext from './contexts/SearchContext';
import TopResults from './TopResults';

function NewMainPageDiv() {

  const [searchInput, setSearchInput] = useState("");

  return (

    <div className=' relative inline-block'>
        <img src="/images/dtu5.jpg" alt="DTU" className="block w-full h-screen object-[70%] object-cover"></img>
        <div className="absolute top-0 left-0 w-full h-full bg-lightest-blue bg-opacity-[85%] ">
            <div className='py-20 lg:py-10 flex mx-2 lg:mx-16 h-screen justify-between'>
                <div className='flex flex-col justify-between w-full lg:w-1/2'>
                  
                  <SearchContext.Provider value={[searchInput,setSearchInput]}>
                    {searchInput === "" ? <MainPageContent/> : <TopResults/>}
                    <SearchBar/>
                  </SearchContext.Provider>

                </div>

                <img src='/images/navigationMapFront.png' className='hidden lg:block lg:h-[60%] xl:h-[70%]  self-center'></img>
            </div>
        </div>
    </div>
  )
}

export default NewMainPageDiv