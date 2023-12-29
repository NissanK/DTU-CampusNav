import {React,useContext} from 'react'
import NavigationContext from './contexts/NavigationContext';

function SelectionButton({item}) {
  const [currentItemID,setCurrentItemID] = useContext(NavigationContext);

  const handleButtonClick = () => {
    setCurrentItemID(item.id);
  };

  return (
    <div className='w-[11rem] h-[3rem] rounded-[0.6875rem] flex justify-center
     items-center gradient-hotspot mb-12 text-[1rem] mr-2 cursor-pointer' 
     onClick={handleButtonClick}
    >
      {item.name}
    </div>
  )
}

export default SelectionButton