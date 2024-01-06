
import MainPageDiv from '../components/MainPageDiv'
import Navbar from '../components/Navbar'
import MainPageSelection from '../components/MainPageSelection'
import Footer from '../components/Footer'
import NewMainPageDiv from '../components/NewMainPageDiv'
import CategoryItemsRow from '../components/CategoryItemsRow'

export default function Home() {
  return (
    <div >
      <NewMainPageDiv></NewMainPageDiv>
      <CategoryItemsRow></CategoryItemsRow>
      <MainPageSelection></MainPageSelection>
      <Footer></Footer>
    </div>
  )
}
