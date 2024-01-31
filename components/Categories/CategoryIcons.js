import {React,useContext} from 'react'
import NavigationContext from '../contexts/NavigationContext';

function CategoryIcons({category}) {

    const [currentItemID, setCurrentItemID, navigationItems] = useContext(NavigationContext);

    const handleClick = () => {
        setCurrentItemID(category.id);
    }

    return (
        <div className={`flex flex-col cursor-pointer rounded-lg py-2
        ${navigationItems[currentItemID-1].superParent == category.id ? `border-icon-blue border-2` : null}`}
        onClick={handleClick}>
            <img src={`./images/categoryIcons/${category.icon}.png`} className=' w-[40%] lg:w-[60%]  mb-2 mx-auto'></img>
            {category.name.split(' ').map((currWord,index) =>(
                <div className='text-center text-icon-blue text-xs lg:text-sm' key={index}>{currWord}</div>
            ))}
        </div>
    )
}

export default CategoryIcons