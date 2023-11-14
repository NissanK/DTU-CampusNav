
function MainPageDiv() {

  return (
      <div className='flex mx-[6rem] my-3 justify-start flex-col px-3 py-4
       h-[50rem] rounded-[30px] bg-lightest-blue opacity-80'>
        <div className="flex justify-between mx-8">
          <div className="w-1/2 mt-12  text-background-blue text-5xl">
            Navigating in DTU Made Easy: Your Ultimate Campus Guide
          </div>
          <img src='/images/navigationMapFront.png' className="w-[16rem] mt-4"></img>
          {/* <div className='bg-[url("/images/navigationMapFront.png")] w-[28rem] h-[25rem] bg-no-repeat'></div> */}
        </div>
      </div>
  )
}

export default MainPageDiv;