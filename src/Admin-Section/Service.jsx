import { Footer, Header } from "../Components"
import ServiceImageModal from "../Components/ImageDisplay/ServiceImageModal"


const Service = () => {
  return (
    <div>
        <Header
          isAdmin={true}
        />
        <ServiceImageModal
          isAdmin={true}
        />
        <Footer/>
    </div>
  )
}

export default Service