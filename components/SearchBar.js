import {React,useContext,useRef,useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SearchContext from './contexts/SearchContext';

function SearchBar() {

    const [searchInput, setSearchInput] = useContext(SearchContext);
    const searchInputRef = useRef(null);
    const searchButtonRef = useRef(null);

    function setSearchData(event){
        setSearchInput(searchInputRef.current.value);
    }

    useEffect(() => {
        function anchorSmoothScroll(e){
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior : "smooth"
            });
        }

        searchButtonRef.current.addEventListener("click",anchorSmoothScroll);
        
        return () =>{
            if (searchButtonRef.current !== null) {
                searchButtonRef.current.removeEventListener('click',anchorSmoothScroll);
            }
        }
    }, []);

    return (
        <div className='w-full h-[3.75rem] justify-end'>
            <div className='relative'>
                <FontAwesomeIcon icon={faLocationDot} 
                className=" absolute left-0 top-1/2 transform -translate-y-1/2 w-[3rem] text-2xl text-bright-blue">
                </FontAwesomeIcon>

                {/* Implement search button such that when clicked it will scroll up to the searched results  */}
                
                <button href={"#topResults"} ref={searchButtonRef} disabled={searchInput === ""} className='absolute right-3 top-1/2 transform -translate-y-1/2
                text-md bg-bright-blue px-5 rounded-[0.625rem] py-[0.35rem] disabled:opacity-50'>Search</button>

                <input type="text" placeholder='Search your location' ref={searchInputRef} onChange={setSearchData}
                    className="border-bright-blue border-[1px] bg-lightest-blue/50
                    w-full h-[3.75rem] rounded-[0.625rem] pr-4 pl-[2.75rem] text-lg md:text-xl select-none">
                </input>
            </div>
        </div>
    )
}

export default SearchBar