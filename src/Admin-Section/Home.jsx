import { Carousel, Footer, Header } from "../Components";
import HomeImageModal from "../Components/ImageDisplay/HomeImageModal";

const Home = () => {
  return (
    <div>
      <Header isAdmin={true} />

      <HomeImageModal isAdmin={true} />

      <Carousel />

      <Footer />
    </div>
  );
};

export default Home;
