import {React,useContext, useEffect,useState} from 'react'
import NavigationItems from './NavigationItems'
import SelectionButton from './SelectionButton'
import ClickCount from './LocationRelated/ClickCountSmall';
import SearchContext from './contexts/SearchContext';

function TopResults() {

  const [searchInput, setSearchInput] = useContext(SearchContext);
  const [sortedItems, setSortedItems] = useState([]);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {

    var newSortedItems = [];
    var searchInputWords = searchInput.split(" ").filter(word => word !== "");

    for(var i = 0;i<NavigationItems.length;i++){
      var currString = NavigationItems[i].name;

      if(currString.length < searchInput.length){
        continue;
      }
      else{
        var currStringWords = currString.split(" ").filter(word => word !== "");
        var flag = 0;

        for(var j =0;j<currStringWords.length;j++){
          if(flag) break;
          for(var k =0;k<searchInputWords.length;k++){
            var currWord = currStringWords[j];
            var searchInputWord = searchInputWords[k];
            var currStringWordArray = currWord.split("");

            currStringWordArray.splice(searchInputWord.length);

            var splicedCurrStringWord = currStringWordArray.join("");

            if(splicedCurrStringWord.toLowerCase() === searchInputWord.toLowerCase()){
              newSortedItems.push(NavigationItems[i]);
              flag = 1;
              break;
            }
          }
        }
      }
    }

    if(newSortedItems.length == 0){
      setEmpty(true);
    }
    else{
      setEmpty(false);
    }

    newSortedItems.sort((a, b) => b.clickCount - a.clickCount);
    setSortedItems(newSortedItems);

  }, [searchInput])

  return (
    <a id="topResults" className={`my-3 max-h-[75%] flex flex-col rounded-[30px] 
      bg-off-blue/50 overflow-y-auto thinScrollbar flex-1`}>

        <div className=" text-background-blue text-2xl md:text-3xl mt-4 md:mt-8
        flex text-center mx-auto items-center">
          {empty === false ? "Top Results" : "No Results!"}
        </div>

        <div className="flex justify-evenly flex-wrap mt-9 md:mt-12">
          {
            sortedItems.map(currItem => (
              <div className='flex justify-between items-center' key = {currItem.id}>
                <SelectionButton item = {currItem}></SelectionButton>
                <ClickCount item={currItem}></ClickCount>
              </div>
            ))
          }
        </div>
    </a>
  )
}

export default TopResults