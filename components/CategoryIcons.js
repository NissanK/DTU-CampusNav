import React from 'react'

function CategoryIcons({category}) {
  return (
    <div className='flex flex-col cursor-pointer'>
        <img src={`./images/categoryIcons/${category.icon}.png`} className='w-[60%]  mb-2 mx-auto'></img>
        {category.name.split(' ').map(currWord =>(
            <div className='text-center text-icon-blue text-sm'>{currWord}</div>
        ))}
    </div>
  )
}

export default CategoryIcons