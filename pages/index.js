
import MainPageDiv from '../components/MainPageDiv'
import Navbar from '../components/Navbar'
import MainPageSelection from '../components/MainPageSelection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div >
      <Navbar></Navbar>
      <MainPageDiv></MainPageDiv>
      <MainPageSelection></MainPageSelection>
      <Footer></Footer>
    </div>
  )
}
