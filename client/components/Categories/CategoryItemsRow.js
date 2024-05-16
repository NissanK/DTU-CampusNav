import React from 'react'
import CategoryIcons from './CategoryIcons'
import categoryItemsData from './CategoryItemsData'

function CategoryItemsRow() {
  return (
    <div className='flex items-center justify-around mx-2 lg:mx-5 my-4 md:my-7 lg:my-10 flex-wrap'>
      {Object.keys(categoryItemsData).map((id) => (
          <CategoryIcons category={categoryItemsData[id]} id={id} key={id}></CategoryIcons>
      ))}
    </div>
  )
}

export default CategoryItemsRow