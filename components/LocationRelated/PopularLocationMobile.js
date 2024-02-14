import {React,} from 'react'
import SelectionButton from '../SelectionButton';
import ClickCount from './ClickCountSmall.js';
import NavigationItems from '../NavigationItems';

function PopularLocationMobile() {


    let sortedNavigationItems = NavigationItems.slice();

    sortedNavigationItems.sort((a, b) => b.clickCount - a.clickCount);

    return (
        <div className={`mx-2 my-3 flex flex-col justify-start rounded-[30px] bg-off-blue`}>
            <div className=" text-background-blue text-2xl mt-4
            flex text-center mx-auto items-center">
                Popular Locations
            </div>

            <div className="flex justify-evenly flex-wrap mt-9 md:mt-12">
                {sortedNavigationItems.slice(0,10).map(currItem => (
                    <div className='flex justify-between items-center' key = {currItem.id}>
                        <SelectionButton item = {currItem}></SelectionButton>
                        <ClickCount item={currItem}></ClickCount>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularLocationMobile