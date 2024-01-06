
import MainPageDiv from '../components/MainPageDiv'
import Navbar from '../components/Navbar'
import MainPageSelection from '../components/MainPageSelection'
import Footer from '../components/Footer'
import NewMainPageDiv from '../components/NewMainPageDiv'

export default function Home() {
  return (
    <div >
      {/* <Navbar></Navbar>
      <MainPageDiv></MainPageDiv> */}
      <NewMainPageDiv></NewMainPageDiv>
      <MainPageSelection></MainPageSelection>
      <Footer></Footer>
    </div>
  )
}
