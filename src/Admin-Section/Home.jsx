import { Footer, Header } from "../Components";
import HomeImageModal from "../Components/ImageDisplay/HomeImageModal";


const Home = () => {


  return (
    <div>
      <Header 
        isAdmin={true}
      />

      <div>

      <HomeImageModal
        isAdmin={true}
      />
      
      </div>

     

      <Footer />
    </div>
  );
};

export default Home;
