import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
    const [searchInput, setSearchInput] = useState("");

    function setSearchData(event){
        setSearchInput(event.target.value);
        console.log(searchInput);
    }

    return (
        <div className='flex mx-4 my-3 justify-start flex-col px-2 py-2
            rounded-[30px] opacity-80 sticky top-0 z-10'>
            <div className="h-[3.75rem] w-full rounded-[27px] flex items-center">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-[0.88rem] w-6 h-6 text-lightest-blue"></FontAwesomeIcon>
                <input type="text" onChange={setSearchData} className="border-none bg-lightest-blue/50 w-full h-[3.75rem] rounded-[27px] px-4 text-2xl select-none">
                </input>
            </div>
        </div>
    )
}

export default Navbar