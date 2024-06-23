import React from 'react'
import CategoryIcons from './CategoryIcons'
import categoryItemsData from './CategoryItemsData'

function CategoryItemsRow() {

  const orderedKeys = ['57240116', '15699078', '88618413', '62637776', '66350266', '23773950', '13418771', '46172799'];

  const renderCategoryIcons = orderedKeys.map((id) => (
      <CategoryIcons category={categoryItemsData[id]} id={id} key={id}></CategoryIcons>
  ));
  
  return (
    <div className='flex items-center justify-around mx-2 lg:mx-5 my-4 md:my-7 lg:my-10 flex-wrap'>
      {renderCategoryIcons}
    </div>
  )
}

export default CategoryItemsRow