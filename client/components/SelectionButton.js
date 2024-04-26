import {React,useEffect,useRef,useContext} from 'react'
import NavigationContext from './contexts/NavigationContext';


function SelectionButton({item}) {

  const [currentItemID,setCurrentItemID,currentSuperParentId,setCurrentSuperParentId] = useContext(NavigationContext);

  const handleButtonClick = () => {
    if(item.nestedItemId)
      setCurrentItemID(item.nestedItemId);
    if(item.id){
      setCurrentItemID(item.id);
      setCurrentSuperParentId(item.superParent);
    }
  };

  const linkRef = useRef(null);

  useEffect(() => {
      function anchorSmoothScroll(e){
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
              behavior : "smooth"
          });
      }
      linkRef.current.addEventListener("click",anchorSmoothScroll);
      
      return () =>{
          if (linkRef.current !== null) {
              linkRef.current.RemoveEventListener('click',anchorSmoothScroll);
          }
      }
  }, []);

  return (
    <a href={"#locationSelector"} ref={linkRef}  className='w-[8rem] sm:w-[12rem] min-h-[2.5rem] min-sm:h-[3rem]
     px-[0.25rem] py-[0.1rem] rounded-[0.6875rem] flex justify-center overflow-hidden
     items-center gradient-hotspot transition-colors mb-6 md:mb-9 text-[0.8rem] md:text-[1rem] mx-2 cursor-pointer text-center' 
     onClick={handleButtonClick}>
      {item.nestedItemName || item.name}
    </a>
  )
}

export default SelectionButton