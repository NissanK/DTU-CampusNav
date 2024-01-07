import {React,useState} from 'react'
import Footer from '../components/Footer'
import NewMainPageDiv from '../components/NewMainPageDiv'
import CategoryItemsRow from '../components/CategoryItemsRow'

import NavigationContext from '../components/contexts/NavigationContext'
import LocationContainer from '../components/LocationContainer'

export default function Home() {

  const navigationItems = [
    { id: 1,
      name: "Academic Departments",
      parent : null,
      superParent : 1,
      clickCount : 100,
      location: null,
      description : null,
      nestedList : [
      { id: 23, name: "Computer Engineering" },
      { id: 24, name: "Information Technology" },
      { id: 25, name: "Software Engineering" },
      { id: 26, name: "Mathematics and Computing Engineering" }
    ]},
  
    { id: 2,
      name: "Recreational",
      parent: 1,
      superParent : 1,
      clickCount : 100,
      location : null,
      description : null,
      nestedList : [
      { id: 17, name: "Nescafe" },
      { id: 18, name: "Mech Canteen" },
      { id: 19, name: "Mic Mac" },
      { id: 20, name: "HPMC" },
      { id: 21, name: "Amul" },
      { id: 22, name: "OAT" }
    ]},
  
    { id: 3,
      name: "Departments",
      parent: null,
      superParent : 3,
      clickCount : 100,
      location : null,  // location needed
      description : null,
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
      ]
    },
  
    { 
      id: 4,  // unique numebr
      name: "React.js", // unqiue, string
      parent : 3, // unique number
      superParent : 3,
      clickCount : 100,
      location :{
        latitude : 28.7449517, // float/number
        longitude : 77.1177903
      },
  
      description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], // array of strings
      nestedList : [] // nested objects
    },
  
    { id: 5, name: "Next.js",parent : 1,superParent : 1,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903}, description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 6, name: "Node.js",parent : 1,superParent : 1,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903}, description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 7, name: "Express.js",parent : 1,superParent : 1,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 8, name: "C++",parent : 1,superParent : 1,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 9, name: "JavaScript",parent : 1,superParent : 1,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 10, name: "Tailwind CSS",parent : 1,superParent : 1,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 11, name: "Bootstrap 5",parent : 1, superParent : 1,clickCount : 100,location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 12, name: "CSS3",parent : 1,superParent : 1,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 13, name: "HTML5",parent : 1,superParent : 1,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 14, name: "Git/Github",parent : 1,superParent : 1,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 15, name: "MySQL",parent : 1,superParent : 1,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 16, name: "MongoDB",parent : 1,superParent : 1,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 17, name: "Nescafe",parent : 2, superParent : 2,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 18, name: "Mech Canteen",parent : 2, superParent : 2,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 19, name: "Mic Mac",parent : 2, superParent : 2,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 20, name: "HPMC",parent : 2, superParent : 2,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 21, name: "Amul",parent : 2, superParent : 2,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 22, name: "OAT",parent : 2, superParent : 2,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 23, name: "Computer Engineering",parent : 3,superParent : 3,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 24, name: "Information Technology",parent : 3,superParent : 3,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 25, name: "Software Engineering",parent : 3,superParent : 3,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] },
    { id: 26, name: "Mathematics and Computing Engineering",parent : 3,superParent : 3,clickCount : 100, location : {latitude : 28.7449517, longitude : 77.1177903},description : ["Room No. 216","Mechanical Dept Second Floor","Near Stairs"], nestedList : [] }
  ];

  const [currentItemID, setCurrentItemID] = useState(1);

  return (
    <div >
      <NewMainPageDiv></NewMainPageDiv>
      <NavigationContext.Provider value={[currentItemID,setCurrentItemID,navigationItems]}>
        <CategoryItemsRow></CategoryItemsRow>
        <LocationContainer></LocationContainer>
      </NavigationContext.Provider>
      <Footer></Footer>
    </div>
  )
}
