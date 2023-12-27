import {React,useState} from "react";
import SelectionButton from "./SelectionButton";
import NavigationContext from "./contexts/NavigationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const navigationItems = [
  { id: 1, name: "Explore DTU's Hottest Food and Hangout Spots with a Single Click!",
    parent : -1,
   nestedList : [
    {id : 2, name: "Recreational"},
    {id : 3, name: "Departments"},
    {id : 4, name: "React.js"},
    {id : 5, name: "Next.js"},
    {id : 6, name: "Node.js"},
    {id : 7, name: "Express.js"},
    {id: 8, name: "C++" },
    {id: 9, name: "JavaScript" },
    {id: 10, name: "Tailwind CSS" },
    {id: 11, name: "Bootstrap 5" },
    {id: 12, name: "CSS3" },
    {id: 13, name: "HTML5" },
    {id: 14, name: "Git/Github" },
    {id: 15, name: "MySQL" },
    {id: 16, name: "MongoDB" }
  ]},
  { id: 2, name: "Recreational",
    parent: 1,
   nestedList : [
    { id: 17, name: "Nescafe" },
    { id: 18, name: "Mech Canteen" },
    { id: 19, name: "Mic Mac" },
    { id: 20, name: "HPMC" },
    { id: 21, name: "Amul" },
    { id: 22, name: "OAT" }
  ]},
  { id: 3, name: "Departments",
    parent: 1,
   nestedList : [
    { id: 23, name: "Computer Engineering" },
    { id: 24, name: "Information Technology" },
    { id: 25, name: "Software Engineering" },
    { id: 26, name: "Mathematics and Computing Engineering" }
  ]},
  { id: 4, name: "React.js",parent : 1, nestedList : [] },
  { id: 5, name: "Next.js",parent : 1, nestedList : [] },
  { id: 6, name: "Node.js",parent : 1, nestedList : [] },
  { id: 7, name: "Express.js",parent : 1, nestedList : [] },
  { id: 8, name: "C++",parent : 1, nestedList : [] },
  { id: 9, name: "JavaScript",parent : 1, nestedList : [] },
  { id: 10, name: "Tailwind CSS",parent : 1, nestedList : [] },
  { id: 11, name: "Bootstrap 5",parent : 1, nestedList : [] },
  { id: 12, name: "CSS3",parent : 1, nestedList : [] },
  { id: 13, name: "HTML5",parent : 1, nestedList : [] },
  { id: 14, name: "Git/Github",parent : 1, nestedList : [] },
  { id: 15, name: "MySQL",parent : 1, nestedList : [] },
  { id: 16, name: "MongoDB",parent : 1, nestedList : [] },
  { id: 17, name: "Nescafe",parent : 2, nestedList : [] },
  { id: 18, name: "Mech Canteen",parent : 2, nestedList : [] },
  { id: 19, name: "Mic Mac",parent : 2, nestedList : [] },
  { id: 20, name: "HPMC",parent : 2, nestedList : [] },
  { id: 21, name: "Amul",parent : 2, nestedList : [] },
  { id: 22, name: "OAT",parent : 2, nestedList : [] },
  { id: 23, name: "Computer Engineering",parent : 3, nestedList : [] },
  { id: 24, name: "Information Technology",parent : 3, nestedList : [] },
  { id: 25, name: "Software Engineering",parent : 3, nestedList : [] },
  { id: 26, name: "Mathematics and Computing Engineering",parent : 3, nestedList : [] }
];


function MainPageDiv() {
  const [currentItemID, setCurrentItemID] = useState(1);

  const handleBackClick = () => {
    setCurrentItemID(navigationItems[currentItemID-1].parent);
  }

  return (
    <div className='flex mx-[6rem] my-3 justify-start flex-col px-5 py-5
      rounded-[30px] bg-off-blue opacity-80'>
      <div className="flex justify-between mx-8 flex-col">

        <div className=" text-background-blue text-4xl mt-8 flex items-center">
          {currentItemID !== 1 ? 
          <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer" onClick={handleBackClick}/> 
          : null
          }
          <div className="flex justify-center items-center w-full text-center">
            {navigationItems[currentItemID-1].name}
          </div>
        </div>

        <div className="flex justify-between flex-wrap mt-12">
          <NavigationContext.Provider value={[currentItemID,setCurrentItemID]}>
          {
            navigationItems[currentItemID-1].nestedList.map(currItem => (
            <SelectionButton item = {currItem} key = {currItem.id}></SelectionButton>
            ))
          }
          </NavigationContext.Provider>
        </div>

      </div>
    </div>
  )
}

export default MainPageDiv;