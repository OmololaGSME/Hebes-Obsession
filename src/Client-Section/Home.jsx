import { Carousel, Footer, Header } from "../Components";
import HomeImageModal from "../Components/ImageDisplay/HomeImageModal";


const Home = () => {

  

  return (
    <div>
        <Header/>

        <div>
      <HomeImageModal/>
        </div>
        <Carousel/>

        <Footer/>
    </div>
  )
}

export default Home