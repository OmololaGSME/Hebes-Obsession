import { Footer, Header } from "../Components";
import HomeImageModal from "../Components/ImageDisplay/HomeImageModal";


const Home = () => {


  return (
    <div>
      <Header 
        isAdmin={true}
      />

      <div>

      <HomeImageModal/>
      
      </div>

     

      <Footer />
    </div>
  );
};

export default Home;
