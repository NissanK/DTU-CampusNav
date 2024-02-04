import {React,useContext} from 'react'
import NavigationContext from './contexts/NavigationContext';

function SelectionButton({item}) {
  const [currentItemID,setCurrentItemID] = useContext(NavigationContext);

  const handleButtonClick = () => {
    setCurrentItemID(item.id);
  };

  return (
    <div className='w-[9rem] sm:w-[12rem] min-h-[2.5rem] min-sm:h-[3rem]
     px-[0.25rem] py-[0.1rem] rounded-[0.6875rem] flex justify-center overflow-hidden
     items-center gradient-hotspot transition-colors mb-6 md:mb-9 text-[0.8rem] md:text-[1rem] mr-2 cursor-pointer text-center' 
     onClick={handleButtonClick}>
      {item.name}
    </div>
  )
}

export default SelectionButton