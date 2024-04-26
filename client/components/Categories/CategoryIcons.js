import {React,useContext} from 'react'
import NavigationContext from '../contexts/NavigationContext';

function CategoryIcons({category}) {

    const [currentItemID,setCurrentItemID,currentSuperParentId,setCurrentSuperParentId] = useContext(NavigationContext);

    const handleClick = () => {
        setCurrentItemID(category.id);
        setCurrentSuperParentId(category.id);
    }

    return (
        <div className={`flex flex-col cursor-pointer rounded-lg py-2  min-w-[calc(25%-1rem)] md:min-w-[calc(12.5%-1rem)]
        ${currentSuperParentId == category.id ? `border-icon-blue border-2` : null}`}
        onClick={handleClick}>
            <img src={`./images/categoryIcons/${category.icon}.png`} className='w-[30px] sm:w-[40px] lg:w-[60px] mb-2 mx-auto'></img>
            {category.name.split(' ').map((currWord,index) =>(
                <div className='text-center text-icon-blue text-[0.6rem] sm:text-xs lg:text-sm' key={index}>{currWord}</div>
            ))}
        </div>
    )
}

export default CategoryIcons