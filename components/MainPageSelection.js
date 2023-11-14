import HotspotButton from "./HotspotButton";

const spots = [
    { name: "DSA" },
    { name: "CP" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "C++" },
    { name: "JavaScript" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap 5" },
    { name: "CSS3" },
    { name: "HTML5" },
    { name: "Git/Github" },
    { name: "MySQL" },
    { name: "MongoDB" }
];

let spotElements = [];

for (let i = 0; i < spots.length; i++) {
  spotElements.push(
    <HotspotButton name={spots[i].name} key={i} ID={i}></HotspotButton>
  );
}

function MainPageDiv() {
  return (
      <div className='flex mx-[6rem] my-3 justify-start flex-col px-5 py-5
       rounded-[30px] bg-off-blue opacity-80'>

        <div className="flex justify-between mx-8 flex-col">
          <div className=" text-background-blue text-4xl text-center mt-8">
            Explore DTU's Hottest Food and Hangout Spots with a Single Click!
          </div>
          <div className="flex justify-between flex-wrap mt-12">
            {spotElements}
          </div>
        </div>
      </div>
  )
}

export default MainPageDiv;