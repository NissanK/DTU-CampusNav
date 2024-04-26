import {React,useContext, useEffect,useState} from 'react'
import SelectionButton from './SelectionButton'
import ClickCount from './LocationRelated/ClickCountSmall';
import SearchContext from './contexts/SearchContext';
import searchButtonContext from './contexts/SearchButtonContext';

function TopResults() {

  const [searchInput, setSearchInput] = useContext(SearchContext);
  const [buttonClicked, setButtonClicked] = useContext(searchButtonContext);
  const [sortedItems, setSortedItems] = useState([]);
  const [empty, setEmpty] = useState(true);
  const [loading,setLoading] = useState(true);

  const Backend = process.env.NEXT_PUBLIC_BACKEND;

  useEffect(() => {
    if(buttonClicked){
      var newSortedItems = [];
      const fetchData = async () => {

        try{
          setLoading(true);
          const response = await fetch(`${Backend}/topResults?search=${searchInput}`);
          const data = await response.json();
          newSortedItems = data;
          if(newSortedItems.length === 0){
            setEmpty(true);
          }
          else{
            setEmpty(false);
          }
          setSortedItems(newSortedItems);
        }
        catch(error){
          setEmpty(true);
        }

        setLoading(false);
      }
      fetchData();
      setButtonClicked(false);
    }

  }, [buttonClicked])

  return (
    <section id="topResults" className={`my-3 max-h-[75%] flex flex-col rounded-[30px] 
      bg-off-blue/50 overflow-y-auto thinScrollbar flex-1`}>

        <h2 className=" text-background-blue text-2xl md:text-3xl mt-4 md:mt-8
        flex text-center mx-auto items-center">
          {loading ? "Loading..." : (empty ? "No Results!" : "Top Results")}
        </h2>

        <div className="flex justify-evenly flex-wrap mt-9 md:mt-12">
          {
            empty === false ? 
            sortedItems.map(currItem => (
              <div className='flex justify-between items-center' key = {currItem.id}>
                <SelectionButton item = {currItem}/>
                <ClickCount item={currItem}/>
              </div>
            ))
            : null
          }
        </div>
    </section>
  )
}

export default TopResults