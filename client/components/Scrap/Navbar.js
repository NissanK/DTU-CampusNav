import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
    const [searchInput, setSearchInput] = useState("");

    function setSearchData(event){
        setSearchInput(event.target.value);
    }

    return (
        <div className='flex mx-1 md:mx-4 my-3 justify-start flex-col px-2 py-2
            rounded-[30px] opacity-80 sticky top-0 z-10'>
            <div className="h-[3.75rem] w-full rounded-[27px] flex items-center">
                <FontAwesomeIcon icon={faMagnifyingGlass} className=" mx-[0.4rem] md:mx-[0.88rem] w-8 h-8 md:w-8 md:h-8 text-lightest-blue"></FontAwesomeIcon>
                <input type="text" onChange={setSearchData} placeholder='Enter the location you want to look for here'
                className="border-none bg-lightest-blue/50 w-full h-[3.75rem] rounded-[27px] px-4 text-xl md:text-2xl select-none">
                </input>
            </div>
        </div>
    )
}

export default Navbar