import React from 'react'
import CategoryIcons from './CategoryIcons'
import categoryItemsData from './CategoryItemsData'

// 1. Academic Departments
// 2. Student Services (library, admin, academic window, tnp department, health centre, jac office, civil complaint office something idr will confirm)
// 3. Auditoriums (raj soin, br audi, convocation hall, pragyan hall, Sanskriti hall, prakriti hall (gotta confirm))
// 4. Outdoor Spaces (oat, pragya bhavan benches, indian flag wala garden, sports complex steps, dtu sign at sports complex etc,)
// 5. Parking (outside each department, and main student parking)
// 6. Food Spots (mech canteen, mic mac, nescafe, hpmc, momo wala, amul etc.)
// 7. Miscellaneous (Tech Teams, DTU IIF, Samsung Lab)
// 8. Housing Facilities (residential and hostels)
// 9. Recreation Facilities (sports complex, badminton, cricket, football, oat, mini oat, concert ground)

// will add carousel for mobile phones, that will showcase better, the one used in bootstrap types

function CategoryItemsRow() {
  return (
    <div className='flex items-center justify-around mx-2 lg:mx-5 my-4 md:my-7 lg:my-10 flex-wrap'>
        {categoryItemsData.map((currItem,index) => (
            <CategoryIcons category={currItem} key={index}></CategoryIcons>
        ))}
    </div>
  )
}

export default CategoryItemsRow